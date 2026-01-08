import { Check } from 'lucide-react';
import type { Game } from '../../types';
import { ValueOrDash } from '../ValueOrDash';
import { BoxTag } from './BoxTag';
import { CartTag } from './CartTag';
import { ManualTag } from './ManualTag';
import { OwnedIcon } from './OwnedIcon';
import { twJoin } from 'tailwind-merge';

type Props = {
  game: Game;
};

export function GameRow({ game }: Props): React.ReactElement {
  const isFullOwned = game.owned && game.status === 'full';
  const isPartialOwned = game.owned && game.status === 'partial';

  const classNames = twJoin(
    'bg-slate-800/30 border-b border-b-slate-800 hover:bg-slate-800/60',
    isFullOwned && 'text-green-300/80',
    isPartialOwned && 'text-yellow-200/80',
    !game.owned && 'text-slate-600',
  );

  const cellClassNames = 'px-2 py-1';
  const mobileCellClassNames = twJoin(cellClassNames, 'hidden md:table-cell');

  return (
    <tr className={classNames} aria-disabled={!game.owned}>
      <td className={mobileCellClassNames}>{game.id.toString().padStart(3, '0')}</td>
      <td className={cellClassNames}>
        <div className="flex flex-row gap-1.5 items-center max-w-full md:max-w-90 lg:max-w-none min-w-0">
          <OwnedIcon game={game} />
          <span className="text-ellipsis text-nowrap overflow-hidden min-w-0">{game.name}</span>
        </div>
      </td>
      <td className={mobileCellClassNames}>
        <ValueOrDash
          render={(value) => <BoxTag value={value} />}
          value={game.owned ? game.box : undefined}
        />
      </td>
      <td className={mobileCellClassNames}>
        <ValueOrDash
          render={(value) => <CartTag value={value} />}
          value={game.owned ? game.cartridge : undefined}
        />
      </td>
      <td className={mobileCellClassNames}>
        <ValueOrDash
          render={(value) => <ManualTag value={value} />}
          value={game.owned ? game.manual : undefined}
        />
      </td>
      <td className={mobileCellClassNames}>
        <ValueOrDash
          render={() => <Check strokeWidth={1.3} className="text-green-300/80" />}
          value={game.pt_manual}
        />
      </td>
    </tr>
  );
}
