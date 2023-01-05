import React from 'react';

const Movable = (props: {
  icon: React.ReactElement;
  position: number[];
  pageX: number;
  pageY: number;
  offsetSpeed: number;
  zIndex?: number;
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: props.position[0] ? props.position[0] : '',
        top: props.position[1] ? props.position[1] : '',
        transform: `translate(${props.pageX * props.offsetSpeed * 0.01}px, ${
          props.pageY * props.offsetSpeed * 0.01
        }px)`,
        zIndex: props.zIndex ? props.zIndex : '',
      }}
    >
      {props.icon}
    </div>
  );
};

export default Movable;
