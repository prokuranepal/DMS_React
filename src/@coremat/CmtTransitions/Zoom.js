import React, { cloneElement } from 'react';
import { Transition } from 'react-transition-group';

const defaultStyle = {
  transition: `transform 300ms`,
};

const transitionStyles = {
  exiting: { transform: 'scale(0)' },
  exited: { transform: 'scale(0)' },
};

const Zoom = ({ in: inProp, style: styleProp, timeout, children }) => {
  const style = {
    ...styleProp,
    ...(React.isValidElement(children) ? children.props.style : {}),
  };

  return (
    <Transition in={inProp} timeout={timeout || 300}>
      {(state, childProps) =>
        cloneElement(children, {
          style: { ...defaultStyle, ...style, ...transitionStyles[state] },
          ...childProps,
        })
      }
    </Transition>
  );
};

export default Zoom;
