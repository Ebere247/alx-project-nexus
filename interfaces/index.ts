export type Price = number | `${number}`;

export type Availability = boolean | "in-stock" | "out-of-stock" | "preorder";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: Price;
  flavour: string;
  size: string;
  vendor: string;
  type: string;
  availability: Availability;
  image: string;
}

export interface CartItem
  extends Pick<Product, "id" | "name" | "image" | "flavour" | "size"> {
  price: number;
  quantity: number;
  variant?: string;
}

export interface Props {
  product: Product;
}

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  success?: boolean;
  children?: React.ReactNode;
  variant: string;
  size: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

export type CartItemCardProps = Pick<
  CartItem,
  "id" | "name" | "price" | "image" | "quantity" | "variant"
>;

export interface CartSummaryProps {
  total: number;
}
