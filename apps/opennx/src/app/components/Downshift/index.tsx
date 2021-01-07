import React, { memo, useState } from 'react';
import { DownShiftWrapper } from './styled';

interface Props {
  count: number;
  onClick: () => void;
}

const Downshift = memo(({ count, onClick }: Props) => {
  console.log('render again', count);
  return <DownShiftWrapper onClick={onClick}>{count}</DownShiftWrapper>;
});

export default Downshift;
