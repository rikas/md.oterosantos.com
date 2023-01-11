import React, { useMemo } from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { Box, Button, Container, Stack, TablePagination, Typography } from '@mui/material';

import games from '../data/games.json';
import EmptyState from './EmptyState';
import GamesTable from './GamesTable';
import SearchField from './SearchField';

import { GAME_STATUS } from '../constants';

const ROWS_PER_PAGE = 50;

const MainPage = () => {
  const ownedGames = useMemo(
    () => games.filter((game) => game.status === GAME_STATUS.FULL),
    [games],
  );

  const percentageComplete = useMemo(() => {
    if (games.length === 0) {
      return (0.0).toFixed(2);
    }

    return ((ownedGames.length * 100) / games.length).toFixed(2);
  }, [games]);

  const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } =
    useCollection(games, {
      filtering: {
        empty: <EmptyState title="No games" subtitle="No games to display." />,
        noMatch: (
          <EmptyState
            title="No matches"
            subtitle="We can't find a match."
            action={
              <Button variant="outlined" onClick={() => actions.setFiltering('')}>
                Clear filter
              </Button>
            }
          />
        ),
      },
      sorting: {},
      selection: {},
      pagination: {
        pageSize: ROWS_PER_PAGE,
        defaultPage: 1,
      },
    });

  return (
    <Container>
      <Box py={3}>
        <Typography variant="h3">My Mega Drive Collection</Typography>
        <Typography color="grey.600" variant="h5">
          {percentageComplete}% Complete ({ownedGames.length} / {games.length})
        </Typography>
      </Box>

      <Box pb={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <SearchField {...filterProps} />
          <TablePagination
            component={Box}
            rowsPerPageOptions={[]}
            count={collectionProps.totalItemsCount}
            page={paginationProps.currentPageIndex - 1}
            rowsPerPage={ROWS_PER_PAGE}
            onPageChange={(_event, newPage) => actions.setCurrentPage(newPage + 1)}
          />
        </Stack>
        <GamesTable
          filteredItemsCount={filteredItemsCount}
          empty={collectionProps.empty}
          games={items}
        />
        <TablePagination
          component={Box}
          rowsPerPageOptions={[]}
          count={collectionProps.totalItemsCount}
          page={paginationProps.currentPageIndex - 1}
          rowsPerPage={ROWS_PER_PAGE}
          onPageChange={(_event, newPage) => actions.setCurrentPage(newPage + 1)}
        />
      </Box>
    </Container>
  );
};

export default MainPage;
