import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import GamesTableRow from './GamesTableRow/GamesTableRow';

const GamesTable = ({ filteredItemsCount, empty, games }) => {
  const sxCell = { display: { xs: 'none', sm: 'table-cell' } };

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="Games table">
        <TableHead>
          <TableRow>
            <TableCell sx={sxCell}>Num</TableCell>
            <TableCell>Name</TableCell>
            <TableCell sx={sxCell}>Box</TableCell>
            <TableCell sx={sxCell}>Cartridge</TableCell>
            <TableCell sx={sxCell}>Manual</TableCell>
            <TableCell sx={sxCell}>PT Manual</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredItemsCount > 0 &&
            games.map((game) => <GamesTableRow key={game.id} game={game} />)}

          {filteredItemsCount === 0 && (
            <TableRow>
              <TableCell colSpan={6}>{empty}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GamesTable;
