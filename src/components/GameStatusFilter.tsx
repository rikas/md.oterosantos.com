import { Root, Item } from '@radix-ui/react-toggle-group';
import type { OwnedStatus } from '../types';
import { twJoin } from 'tailwind-merge';

type Props = {
  activeFilter: OwnedStatus;
  onChange: (newFilter: OwnedStatus) => void;
};

export function GameStatusFilter({ activeFilter, onChange }: Props): React.ReactElement {
  const buttonClassNames = twJoin(
    'px-3 py-2.5 text-slate-300 outline-none cursor-pointer',
    'hover:bg-slate-800 hover:text-slate-100',
    'border-r border-slate-800 min-w-30 md:min-w-20',
    'first-of-type:rounded-l-lg last-of-type:rounded-r-lg last-of-type:border-none',
    'focus:ring-slate-500 focus-visible:ring-slate-500',
    'data-[state=on]:bg-slate-700',
  );
  return (
    <Root
      type="single"
      value={activeFilter}
      onValueChange={(value: OwnedStatus) => {
        if (value) {
          onChange(value);
        }
      }}
      className="inline-flex items-center rounded-lg bg-slate-900 ring ring-slate-800"
    >
      <Item value="all" className={buttonClassNames}>
        All
      </Item>

      <Item value="owned" className={buttonClassNames}>
        Owned
      </Item>

      <Item value="missing" className={buttonClassNames}>
        Missing
      </Item>
    </Root>
  );
}
