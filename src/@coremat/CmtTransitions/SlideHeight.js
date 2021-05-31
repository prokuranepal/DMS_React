import React, { cloneElement } from 'react';
import { Transition } from 'react-transition-group';

const defaultStyle = {
  transition: `transform 0.3s ease`,
};

const getTransitionStyles = height => {
  return {
    entering: { transform: `translateY(${height}px)` },
    entered: { transform: `translateY(${height}px)` },
    exiting: { transform: `translateY(${height}px)` },
    exited: { transform: `translateY(${height}px)` },
  };
};

const SlideHeight = ({ in: inProp, style: styleProp, slidableHeight, timeout, children }) => {
  const style = {
    ...styleProp,
    ...(React.isValidElement(children) ? children.props.style : {}),
  };

  return (
    <Transition in={inProp} timeout={timeout || 300}>
      {(state, childProps) =>
        cloneElement(children, {
          style: {
            ...defaultStyle,
            ...style,
            ...getTransitionStyles(slidableHeight)[state],
          },
          ...childProps,
        })
      }
    </Transition>
  );
};

export default SlideHeight;
