import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { CreateTypes } from 'canvas-confetti';

import styles from './FireworksCanvas.module.css';

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function getAnimationSettings(originXA: number, originXB: number) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
}

const FireworksCanvas = () => {
  const refAnimationInstance = useRef<CreateTypes | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const getInstance = useCallback((instance: CreateTypes | null) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId as NodeJS.Timeout);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 1.5 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
      ticks: 1000,
    });

    makeShot(0.2, {
      spread: 60,
      ticks: 1000,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      ticks: 1000,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      ticks: 1000,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
      ticks: 1000,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
    return () => {
      clearInterval(intervalId as NodeJS.Timeout);
    };
  }, [intervalId]);

  return (
    <div className={styles.container} onClick={fire}>
      <ReactCanvasConfetti refConfetti={getInstance} className={styles.canvas} />
    </div>
  );
};

export default FireworksCanvas;
