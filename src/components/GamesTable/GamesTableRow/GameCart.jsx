import { Chip } from '@mui/material';
import { GAME_STATUS, CARTS } from '../../../constants';
import EmptyValue from './EmptyValue';

const GameCart = ({ status, cartridge }) => {
  if (status === GAME_STATUS.NONE) {
    return <EmptyValue />;
  } else {
    const cartProps = CARTS[cartridge];
    return <Chip size="small" variant="outlined" {...cartProps} />;
  }
};

export default GameCart;
