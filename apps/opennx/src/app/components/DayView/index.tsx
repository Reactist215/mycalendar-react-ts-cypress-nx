import { Moment } from 'moment';
import React, { FC } from 'react';
import { DayViewWrapper } from './styled';

type IProps = {
  date: Moment;
};

const DayView: FC<IProps> = ({ date }) => {
  return <DayViewWrapper>{date.format('DD-MM')}</DayViewWrapper>;
};

export default DayView;
