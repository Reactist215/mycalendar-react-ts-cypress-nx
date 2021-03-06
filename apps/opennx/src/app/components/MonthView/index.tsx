import React, { FC, useEffect, useState } from 'react';
import moment from 'moment';
import {
  getDaysMonth,
  getFirstDayMonth,
  getWeeks,
  getWeeksNum,
  weeks_of_month,
} from '../../util/date';
import WeekdaysHeader from './components/WeekdaysHeader';
import WeekdaysRow from './components/WeekdaysRow';
import { EventWrapper, MonthViewWrapper, WeekRowWrapper } from './styled';
import WeekdaysCell from './components/WeekdaysCell';

type MonthViewProps = {
  year: number;
  month: number;
};

const MonthView: FC<MonthViewProps> = ({ year, month }) => {
  const weeks_month = weeks_of_month(year, month);

  return (
    <MonthViewWrapper>
      <WeekdaysHeader type="full" />
      {weeks_month.map((week, index) => (
        <WeekRowWrapper key={index}>
          {week.map((date) => (
            <WeekdaysCell key={date.toString()} date={date} />
          ))}
        </WeekRowWrapper>
      ))}
      <EventWrapper>New Event</EventWrapper>
    </MonthViewWrapper>
  );
};

export default MonthView;
