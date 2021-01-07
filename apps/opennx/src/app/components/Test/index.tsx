import React from 'react';

interface ComponentProps {
  onClick: () => void;
}

const TestComponent = ({ onClick }: ComponentProps) => {
  return <div onClick={onClick}>Click Me!!!</div>;
};

export default TestComponent;
