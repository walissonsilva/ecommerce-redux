import React from "react";

import * as S from "./styles";

interface CartProps {
  show: boolean;
}

export const Cart: React.FC<CartProps> = ({ show }) => {
  return (
    <S.Container show={show}>
      <S.CartTitle>Carrinho</S.CartTitle>
    </S.Container>
  );
};
