import type { BoxType } from '../../types';
import { Tag } from '../Tag';

const boxTypeLabels: Record<BoxType, string> = {
  no_box: 'Missing',
  box_md_eu: 'EU',
  box_md_jp: 'JP',
  box_genesis: 'Genesis',
};

const boxTypeColors: Record<BoxType, 'red' | 'green' | 'yellow'> = {
  no_box: 'red',
  box_md_eu: 'green',
  box_md_jp: 'yellow',
  box_genesis: 'yellow',
};

type Props = {
  value: BoxType;
};

export function BoxTag({ value }: Props): React.ReactElement {
  return <Tag color={boxTypeColors[value]} label={boxTypeLabels[value]} />;
}
