import { CircleCheck, CircleDashed, CircleMinus } from 'lucide-react';
import type { Game } from '../../types';

type Props = {
  game: Readonly<Game>;
};

export function OwnedIcon({ game }: Props): React.ReactElement {
  const iconProps = { strokeWidth: 1.3, size: 24 };
  if (game.owned && game.status === 'full') {
    return <CircleCheck {...iconProps} />;
  } else if (game.owned && game.status === 'partial') {
    return <CircleMinus {...iconProps} />;
  } else {
    return <CircleDashed {...iconProps} />;
  }
}
