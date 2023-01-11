import React, { useMemo } from 'react';
import { Stack, Typography } from '@mui/material';
import CheckIcon from './CheckIcon';
import { GAME_STATUS } from '../../../constants';

const GameName = ({ status, name }) => {
  const gameLabelColor = useMemo(() => {
    switch (status) {
      case GAME_STATUS.FULL:
        return 'success.main';
      case GAME_STATUS.PARTIAL:
        return 'warning.main';
      default:
        return 'grey';
    }
  }, [status]);

  return (
    <Stack direction="row" gap={1}>
      <CheckIcon status={status} />
      <Typography color={gameLabelColor}>{name}</Typography>
    </Stack>
  );
};

export default GameName;
