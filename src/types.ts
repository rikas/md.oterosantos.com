export type OwnedStatus = 'all' | 'owned' | 'missing';

type GameStatus = 'full' | 'partial' | 'none';
export type BoxType = 'box_md_eu' | 'box_md_jp' | 'no_box' | 'box_genesis';
export type CartType = 'no_cart' | 'cart_md_eu' | 'cart_md_jp' | 'cart_genesis';
export type ManualType = 'no_manual' | 'manual_md_eu' | 'manual_md_jp' | 'manual_genesis';

export interface Game {
  id: number;
  name: string;
  owned: boolean;
  box: BoxType;
  status: GameStatus;
  cartridge: CartType;
  manual: ManualType;
  pt_manual: boolean;
  notes?: string;
}
