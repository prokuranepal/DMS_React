import React, { cloneElement } from 'react';
import { Transition } from 'react-transition-group';

const defaultStyle = {
  transition: `all 0.3s ease`,
};

const transitionStyles = {
  entering: { opacity: 1, transform: 'translateY(-100%)' },
  entered: { opacity: 1, transform: 'translateY(-100%)' },
  exiting: { opacity: 0, transform: 'translateY(0%)' },
  exited: { opacity: 0, transform: 'translateY(0%)' },
};

const RevealEffect = ({ in: inProp, style: styleProp, timeout, children }) => {
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

export default RevealEffect;
