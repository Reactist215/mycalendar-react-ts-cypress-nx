import { Moment } from 'moment';
import React, { FC } from 'react';
import { WeekViewDayWrapper } from './styled';

type IProps = {
  day: Moment;
};

const WeekViwDay: FC<IProps> = ({ day }) => {
  return (
    <WeekViewDayWrapper>
      {day.format('ddd')}
      <br />
      {day.clone().format('MM-DD')}
    </WeekViewDayWrapper>
  );
};

export default WeekViwDay;
