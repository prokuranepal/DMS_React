import React, { cloneElement } from 'react';
import { Transition } from 'react-transition-group';

const getTransitionStyles = direction => {
  if (direction === 'up') {
    return {
      entering: { opacity: 1, height: '100%', transform: 'translateY(0%)' },
      entered: { opacity: 1, height: '100%', transform: 'translateY(0%)' },
      exiting: { opacity: 0, height: 0, transform: 'translateY(-100%)' },
      exited: { opacity: 0, height: 0, transform: 'translateY(-100%)' },
    };
  }

  if (direction === 'left') {
    return {
      entering: { opacity: 1, height: '100%', transform: 'translateX(0%)' },
      entered: { opacity: 1, height: '100%', transform: 'translateX(0%)' },
      exiting: { opacity: 0, height: 0, transform: 'translateX(-100%)' },
      exited: { opacity: 0, height: 0, transform: 'translateX(-100%)' },
    };
  }

  if (direction === 'right') {
    return {
      entering: { opacity: 1, height: '100%', transform: 'translateX(0%)' },
      entered: { opacity: 1, height: '100%', transform: 'translateX(0%)' },
      exiting: { opacity: 0, height: 0, transform: 'translateX(100%)' },
      exited: { opacity: 0, height: 0, transform: 'translateX(100%)' },
    };
  }

  return {
    entering: { opacity: 1, height: '100%', transform: 'translateY(0%)' },
    entered: { opacity: 1, height: '100%', transform: 'translateY(0%)' },
    exiting: { opacity: 0, height: 0, transform: 'translateY(100%)' },
    exited: { opacity: 0, height: 0, transform: 'translateY(100%)' },
  };
};

const transitionDefaultStyle = duration => {
  return {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
  };
};

const FadeWithDirection = ({ in: inProp, style: styleProp, direction, duration, children }) => {
  const style = {
    ...styleProp,
    ...(React.isValidElement(children) ? children.props.style : {}),
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state, childProps) =>
        cloneElement(children, {
          style: {
            ...transitionDefaultStyle(duration || 300),
            ...style,
            ...getTransitionStyles(direction)[state],
          },
          ...childProps,
        })
      }
    </Transition>
  );
};

export default FadeWithDirection;
