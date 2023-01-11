import React from 'react';
import { Chip } from '@mui/material';
import { GAME_STATUS, BOXES } from '../../../constants';
import EmptyValue from './EmptyValue';

const GameBox = ({ status, box }) => {
  if (status === GAME_STATUS.NONE) {
    return <EmptyValue />;
  } else {
    const boxProps = BOXES[box];
    return <Chip size="small" variant="outlined" {...boxProps} />;
  }
};

export default GameBox;
