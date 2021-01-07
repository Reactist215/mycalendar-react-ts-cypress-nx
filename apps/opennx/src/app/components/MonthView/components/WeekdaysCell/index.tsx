import React, { FC } from 'react';
import styled from 'styled-components';

type IProps = {
  day: number;
};

const WeekdaysCellWrapper = styled.div`
  flex: 1;
  padding: 0.1rem;
  height: 100%;
  border: 1px solid #e2e2e2;
  min-height: 5rem;
`;

const WeekdaysCell: FC<IProps> = ({ day, children }) => {
  return (
    <WeekdaysCellWrapper>
      <span>{day}</span>
      {children}
    </WeekdaysCellWrapper>
  );
};

export default WeekdaysCell;
