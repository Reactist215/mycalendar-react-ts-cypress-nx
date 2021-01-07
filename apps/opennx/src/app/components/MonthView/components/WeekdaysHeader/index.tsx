import React, { FC } from 'react';
import { Weekday, WeekdaysHeaderWrapper } from './styled';
import { WeekDays } from '../../../../contants/week';

type IProps = {
  type: string;
};

const WeekdaysHeader: FC<IProps> = ({ type, children }) => {
  return (
    <WeekdaysHeaderWrapper id="weekdays-header">
      {WeekDays.map((day) => (
        <Weekday key={day}>{day}</Weekday>
      ))}
    </WeekdaysHeaderWrapper>
  );
};

export default WeekdaysHeader;
