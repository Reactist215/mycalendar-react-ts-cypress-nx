import React from 'react';
import { TestWrapper } from './styled';

const TestFuncChild = ({ children }) => {
  const onClickHandler = () => {
    alert('here is ');
  };

  return (
    <div>
      {React.cloneElement(children, {
        onClick: onClickHandler,
      })}
    </div>
  );
};

export default TestFuncChild;
