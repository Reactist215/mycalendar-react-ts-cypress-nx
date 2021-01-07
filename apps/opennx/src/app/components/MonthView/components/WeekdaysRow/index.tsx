import React, { FC, useEffect, useState } from 'react';
import WeekdaysCell from '../WeekdaysCell';
import { WeekdaysRowWrapper } from './styled';

type IProps = {
  from: number;
};

const WeekdaysRow: FC<IProps> = ({ from }) => {
  const [days, setDays] = useState<Array<number>>(() => {
    const tmp: Array<number> = [];
    for (let i = 0; i < 7; i++) {
      tmp.push(from + i);
    }
    return tmp;
  });

  return (
    <WeekdaysRowWrapper>
      {days.map((day) => (
        <WeekdaysCell day={day}></WeekdaysCell>
      ))}
    </WeekdaysRowWrapper>
  );
};

export default WeekdaysRow;
