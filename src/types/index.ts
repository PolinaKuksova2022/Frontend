export type TProductItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  count?: number | undefined;
};
export type TCartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  count: number;
};
