import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import MonthView from './components/MonthView';
import { MM } from './contants/month';

const Title = styled.h1`
  text-align: center;
`;

const ControllerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

const ButtonWrapper = styled.div`
  flex: 1;
`;

export function App() {
  return (
    <div>
      <Title>Voyage Calendar</Title>
      <ControllerWrapper>
        <ButtonWrapper>
          <Button title="today" onClick={() => console.log('clicked')}>
            Today
          </Button>
        </ButtonWrapper>
        <ButtonWrapper style={{ textAlign: 'center' }}>
          <Button title="today" onClick={() => console.log('clicked')}>
            {'<'}
          </Button>
          <Button title="today" onClick={() => console.log('clicked')}>
            {'>'}
          </Button>
        </ButtonWrapper>
        <ButtonWrapper style={{ textAlign: 'right' }}>
          <Button title="day_view_btn" onClick={() => console.log('clicked')}>
            Day
          </Button>
          <Button title="week_view_btn" onClick={() => console.log('clicked')}>
            Week
          </Button>
          <Button title="month_view_btn" onClick={() => console.log('clicked')}>
            Month
          </Button>
        </ButtonWrapper>
      </ControllerWrapper>
      <MonthView monthNumber={MM.April} />
    </div>
  );
}

export default App;
