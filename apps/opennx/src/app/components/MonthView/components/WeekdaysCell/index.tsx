import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import moment, { Moment } from 'moment';

type IProps = {
  date: Moment;
};

const WeekdaysCellWrapper = styled.div`
  flex: 1;
  padding: 0.1rem;
  height: 100%;
  border: 1px solid #e2e2e2;
  min-height: 5rem;
  &.today {
    background-color: #228adc;
    color: white;
  }
`;

const WeekdaysCell: FC<IProps> = ({ date, children }) => {
  return (
    <WeekdaysCellWrapper
      className={`${date.isSame(moment(), 'day') ? 'today' : ''}`}
    >
      <span>{date.date()}</span>
      {children}
    </WeekdaysCellWrapper>
  );
};

export default WeekdaysCell;
