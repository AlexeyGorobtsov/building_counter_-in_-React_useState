import React from 'react';
import {Button} from "./button";

const {useState} = React;

export const Count = () => {
  const [count, setCount] = useState(0);
  const incrementCount = increment => setCount(count + increment);

  return (
      <div>
          <Button increment={1} onClickFunction={incrementCount}/>
          <Button increment={10} onClickFunction={incrementCount}/>
          <Button increment={100} onClickFunction={incrementCount}/>
          <Button increment={1000} onClickFunction={incrementCount}/>
          <span>{count}</span>
      </div>
  )
};