import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import GameId from './GameId';
import GameBox from './GameBox';
import GameCart from './GameCart';
import GameManual from './GameManual';
import GameName from './GameName';
import GamePTManual from './GamePTManual';

import { GAME_STATUS } from '../../../constants';

const GamesTableRow = ({ game }) => {
  const backgroundColor = (theme) => {
    return game.status === GAME_STATUS.NONE ? theme.palette.action : theme.palette.action.hover;
  };

  const sxCell = { display: { xs: 'none', sm: 'table-cell' } };

  return (
    <TableRow sx={{ backgroundColor }}>
      <TableCell width={50} sx={sxCell}>
        <GameId status={game.status} id={game.id} />
      </TableCell>
      <TableCell>
        <GameName status={game.status} name={game.name} />
      </TableCell>
      <TableCell sx={sxCell}>
        <GameBox status={game.status} box={game.box} />
      </TableCell>
      <TableCell sx={sxCell}>
        <GameCart status={game.status} cartridge={game.cartridge} />
      </TableCell>
      <TableCell sx={sxCell}>
        <GameManual status={game.status} manual={game.manual} />
      </TableCell>
      <TableCell sx={sxCell}>
        <GamePTManual status={game.status} ptManual={game.pt_manual} />
      </TableCell>
    </TableRow>
  );
};

export default GamesTableRow;
