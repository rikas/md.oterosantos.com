import { useMemo, useState } from 'react';
import './style.css';
import { GAME_STATUS } from './constants';
import gamesData from './data/games.json';
import { useCollection } from '@cloudscape-design/collection-hooks';
import type { Game } from './types';
import { GamesTable } from './components/GamesTable';
import { SearchInput } from './components/SearchInput';
import { Pagination } from './components/Pagination';
import { EmptyState } from './components/GamesTable/EmptyState';
import { GameStatusFilter } from './components/GameStatusFilter';

const ROWS_PER_PAGE = 100;

export default function App(): React.ReactElement {
  const [filter, setFilter] = useState<'owned' | 'missing' | 'all'>('all');
  const games: Game[] = gamesData as Game[];

  const ownedGames: Game[] = useMemo(
    () => games.filter((game) => game.status === GAME_STATUS.FULL),
    [games],
  );

  const percentageComplete = useMemo(() => {
    if (games.length === 0) {
      return (0.0).toFixed(2);
    }

    return ((ownedGames.length * 100) / games.length).toFixed(2);
  }, [ownedGames.length, games.length]);

  const filteredGames: Game[] = useMemo(() => {
    if (filter === 'owned') {
      return games.filter((game) => game.owned);
    }

    if (filter === 'missing') {
      return games.filter((game) => !game.owned);
    }

    return games;
  }, [filter, games]);

  const { items, filterProps, paginationProps, filteredItemsCount, collectionProps } =
    useCollection(filteredGames, {
      filtering: {
        empty: <EmptyState title="No games to display" description="You have no games" />,
        noMatch: (
          <EmptyState title="We can't find a match" description="Try adjusting your search" />
        ),
      },
      sorting: {},
      selection: {},
      pagination: {
        pageSize: ROWS_PER_PAGE,
      },
    });

  return (
    <div className="container m-auto py-10 px-4">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-3xl md:text-6xl font-headings opacity-80">
            My Mega Drive Collection
          </h1>
          <h5 className="text-lg md:text-2xl text-slate-500 font-extralight">
            <span className="font-extralight">{percentageComplete}% Complete</span> (
            {ownedGames.length} / {games.length})
          </h5>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex md:hidden">
            <GameStatusFilter activeFilter={filter} onChange={setFilter} />
          </div>

          <div className="flex flex-row justify-between gap-4">
            <SearchInput value={filterProps.filteringText} onChange={filterProps.onChange} />

            <div className="hidden md:flex">
              <GameStatusFilter activeFilter={filter} onChange={setFilter} />
            </div>

            <Pagination
              currentPageIndex={paginationProps.currentPageIndex}
              pagesCount={paginationProps.pagesCount}
              onChange={paginationProps.onChange}
            />
          </div>

          <GamesTable
            filteredItemsCount={filteredItemsCount || 0}
            games={items}
            emptyState={collectionProps.empty}
          />
        </div>
      </div>
    </div>
  );
}
