import type { CartType } from '../../types';
import { Tag } from '../Tag';

const cartTypeLabels: Record<CartType, string> = {
  no_cart: 'Missing',
  cart_md_eu: 'EU',
  cart_md_jp: 'JP',
  cart_genesis: 'Genesis',
};

const cartTypeColors: Record<CartType, 'red' | 'green' | 'yellow'> = {
  no_cart: 'red',
  cart_md_eu: 'green',
  cart_md_jp: 'yellow',
  cart_genesis: 'yellow',
};

type Props = {
  value: CartType;
};

export function CartTag({ value }: Props): React.ReactElement {
  return <Tag color={cartTypeColors[value]} label={cartTypeLabels[value]} />;
}
