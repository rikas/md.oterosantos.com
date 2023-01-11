import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { GAME_STATUS } from '../../../constants';
import EmptyValue from './EmptyValue';

const GamePTManual = ({ status, ptManual }) => {
  if (status === GAME_STATUS.NONE) {
    return <EmptyValue />;
  }

  if (ptManual) {
    return <CheckIcon color="success" />;
  } else {
    return <CloseIcon color="error" />;
  }
};

export default GamePTManual;
