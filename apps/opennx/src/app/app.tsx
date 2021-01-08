import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
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
  const [month, setMonth] = useState(() => {
    return moment().month();
  });

  const [year, setYear] = useState(() => {
    return moment().year();
  });
  const onClickNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const onClickPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };
  return (
    <div>
      <Title>Voyage Calendar</Title>
      <Title>
        {year} - {month + 1}
      </Title>
      <ControllerWrapper>
        <ButtonWrapper>
          <Button title="today" onClick={() => console.log('clicked')}>
            Today
          </Button>
        </ButtonWrapper>
        <ButtonWrapper style={{ textAlign: 'center' }}>
          <Button title="today" onClick={onClickPrevMonth}>
            {'<'}
          </Button>
          <Button title="today" onClick={onClickNextMonth}>
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
      <MonthView year={year} month={month + 1} />
    </div>
  );
}

export default App;
