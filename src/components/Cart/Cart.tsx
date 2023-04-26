import { Product } from "../../data/products";

import * as S from "./styles";

interface CartProps {
  showCart: boolean;
  products: Product[];
}

export const Cart: React.FC<CartProps> = ({ showCart, products }) => {
  return (
    <S.Container showCart={showCart} data-testid="cart">
      <S.Title>Carrinho</S.Title>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};
