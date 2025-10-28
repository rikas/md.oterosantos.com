import { twJoin } from 'tailwind-merge';
import type { Game } from '../../types';
import { GameRow } from './GameRow';

type Props = {
  filteredItemsCount: number;
  games: Readonly<Game[]>;
  emptyState: React.ReactNode;
};

export function GamesTable({ filteredItemsCount, games, emptyState }: Props): React.ReactElement {
  const classNames = 'text-left text-base font-normal p-2 bg-slate-950/20 text-slate-400';
  const mobileClassNames = twJoin(classNames, 'hidden md:table-cell');

  return (
    <table className="text-lg w-full text-left">
      <thead>
        <tr>
          <th className={mobileClassNames}></th>
          <th className={classNames}>Name</th>
          <th className={mobileClassNames}>Box</th>
          <th className={mobileClassNames}>Cart</th>
          <th className={mobileClassNames}>Manual</th>
          <th className={twJoin(mobileClassNames, 'w-32')}>PT Manual</th>
        </tr>
      </thead>

      <tbody>
        {filteredItemsCount === 0 ? (
          <tr>
            <td colSpan={6} className="bg-slate-800/30">
              {emptyState}
            </td>
          </tr>
        ) : null}
        {filteredItemsCount > 0 && games.map((game) => <GameRow key={game.id} game={game} />)}
      </tbody>
    </table>
  );
}
