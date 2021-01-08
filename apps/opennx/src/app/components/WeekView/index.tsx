import React, { FC } from 'react';
import { getWeekDays } from '../../util/date';
import { WeekViewWrapper } from './styled';
import WeekViewDay from './components/WeekViewDay';

type IProps = {
  year: number;
  weeknum: number;
};

const WeekView: FC<IProps> = ({ year, weeknum }) => {
  const weekDays = getWeekDays(year, weeknum);

  return (
    <WeekViewWrapper>
      {weekDays.map((day) => (
        <WeekViewDay key={day.date().toString()} day={day} />
      ))}
    </WeekViewWrapper>
  );
};

export default WeekView;
