import React, { FC } from 'react';
import WeekdaysHeader from './components/WeekdaysHeader';
import WeekdaysRow from './components/WeekdaysRow';
import { MonthViewWrapper } from './styled';

type MonthViewProps = {
  monthNumber: number;
};

const MonthView: FC<MonthViewProps> = ({ monthNumber }) => {
  return (
    <MonthViewWrapper>
      <WeekdaysHeader type="full" />
      <WeekdaysRow from={1} />
      <WeekdaysRow from={8} />
      <WeekdaysRow from={15} />
      <WeekdaysRow from={22} />
      <WeekdaysRow from={29} />
    </MonthViewWrapper>
  );
};

export default MonthView;
