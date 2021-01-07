import React, { useCallback, useState } from 'react';

import styled from 'styled-components';
import Downshift from './components/Downshift';
import TestComponent from './components/Test';
import TestFuncChild from './components/TestFuncChild';

const AppRoot = styled.div`
  border: 1px solid black;
  padding: 2rem;
  max-width: 20rem;
  margin: auto;
`;

export function App() {
  const [count1, setCount1] = useState<number>(0);
  const clickHandler1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const [count2, setCount2] = useState<number>(0);
  const clickHandler2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);
  return (
    <AppRoot>
      <Downshift count={count1} onClick={clickHandler1} />
      <Downshift count={count2} onClick={clickHandler2} />

      <TestFuncChild>
        <TestComponent />
      </TestFuncChild>
    </AppRoot>
  );
}

export default App;
