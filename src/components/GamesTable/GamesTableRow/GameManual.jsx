import React from 'react';
import { Chip } from '@mui/material';
import { GAME_STATUS, MANUALS } from '../../../constants';
import EmptyValue from './EmptyValue';

const GameManual = ({ status, manual }) => {
  if (status === GAME_STATUS.NONE) {
    return <EmptyValue />;
  } else {
    const manualProps = MANUALS[manual];
    return <Chip size="small" variant="outlined" {...manualProps} />;
  }
};

export default GameManual;
