import React from "react";

import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { FiTrash2 } from "react-icons/fi";

interface CartProps {
  show: boolean;
}

export const Cart: React.FC<CartProps> = ({ show }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector(
    (rootReducer: RootState) => rootReducer.cartReducer
  );

  const total = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <S.Container show={show}>
      <S.CartTitle>Carrinho</S.CartTitle>

      <S.CartList>
        {cart.map((product) => (
          <S.CartItem key={product.id}>
            <S.CardItemTitle>{product.title}</S.CardItemTitle>
            <FiTrash2
              onClick={() =>
                dispatch({ type: "cart/remove-product", payload: product })
              }
            />
          </S.CartItem>
        ))}
      </S.CartList>

      {cart.length > 0 && (
        <>
          <S.SummaryInfo>{`Total: $${total}`}</S.SummaryInfo>
          <S.CartButtons>
            <S.ClearCartButton onClick={() => dispatch({ type: "cart/clear" })}>
              Limpar Carrinho
            </S.ClearCartButton>
            <S.CheckoutButton>Finalizar</S.CheckoutButton>
          </S.CartButtons>
        </>
      )}
    </S.Container>
  );
};
