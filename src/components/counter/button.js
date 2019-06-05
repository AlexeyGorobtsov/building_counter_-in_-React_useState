import React from 'react';

export const Button = ({increment, onClickFunction}) => {
  const handleClick = () => onClickFunction(increment);
  return (
      <button onClick={handleClick}>
          +{increment}
      </button>
  )
};