import React from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import { GAME_STATUS } from '../../../constants';

const CheckIcon = ({ status }) => {
  if (status === GAME_STATUS.FULL) {
    return <RadioButtonCheckedIcon color="success" />;
  } else if (status === GAME_STATUS.PARTIAL) {
    return <RadioButtonCheckedIcon color="warning" />;
  } else {
    return <RadioButtonUncheckedIcon color="disabled" />;
  }
};

export default CheckIcon;
