import React from "react";

import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";

export const ProductCard: React.FC = () => {
  return (
    <S.Container>
      <S.CardHeader>
        <S.ProductImage src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      </S.CardHeader>

      <S.CardMain>
        <S.ProductTitle>
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </S.ProductTitle>

        <S.PriceReviewWrapper>
          <S.ProductReview>Review</S.ProductReview>
          <S.ProductPrice>$109.95</S.ProductPrice>
        </S.PriceReviewWrapper>

        <S.AddToCardButton>
          Adicionar ao carrinho
          <FiShoppingCart />
        </S.AddToCardButton>
      </S.CardMain>
    </S.Container>
  );
};
