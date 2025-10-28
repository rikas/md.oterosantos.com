import type { ManualType } from '../../types';
import { Tag } from '../Tag';

const cartTypeLabels: Record<ManualType, string> = {
  no_manual: 'Missing',
  manual_md_eu: 'EU',
  manual_md_jp: 'JP',
  manual_genesis: 'Genesis',
};

const cartTypeColors: Record<ManualType, 'red' | 'green' | 'yellow'> = {
  no_manual: 'red',
  manual_md_eu: 'green',
  manual_md_jp: 'yellow',
  manual_genesis: 'yellow',
};

type Props = {
  value: ManualType;
};

export function ManualTag({ value }: Props): React.ReactElement {
  return <Tag color={cartTypeColors[value]} label={cartTypeLabels[value]} />;
}
