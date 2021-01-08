import React, { FC } from 'react';
import styled from 'styled-components';
import { Moment } from 'moment';

type IProps = {
  date: Moment;
};

const WeekdaysCellWrapper = styled.div`
  flex: 1;
  padding: 0.1rem;
  height: 100%;
  border: 1px solid #e2e2e2;
  min-height: 5rem;
`;

const WeekdaysCell: FC<IProps> = ({ date, children }) => {
  return (
    <WeekdaysCellWrapper>
      <span>{date.date()}</span>
      {children}
    </WeekdaysCellWrapper>
  );
};

export default WeekdaysCell;
