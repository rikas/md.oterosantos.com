import { useMemo } from 'react';
import { Typography } from '@mui/material';
import { GAME_STATUS } from '../../../constants';

const GameId = ({ status, id }) => {
  const formattedId = id.toString().padStart(3, '0');

  const color = useMemo(() => {
    switch (status) {
      case GAME_STATUS.FULL:
        return 'success.main';
      case GAME_STATUS.PARTIAL:
        return 'warning.main';
      default:
        return 'grey';
    }
  }, [status]);

  return <Typography color={color}>{formattedId}</Typography>;
};

export default GameId;
