import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import * as S from "./styles";
import { Product } from "../../types/Product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <S.Container>
      <S.CardHeader>
        <S.ProductImage src={product.image} alt={product.description} />
      </S.CardHeader>

      <S.CardMain>
        <S.ProductTitle>{product.title}</S.ProductTitle>

        <S.PriceReviewWrapper>
          <S.ProductReview>
            {Array.from({ length: 5 }).map((_, index) =>
              index < Math.round(product.rating.rate) ? (
                <AiFillStar />
              ) : (
                <AiOutlineStar />
              )
            )}
          </S.ProductReview>
          <S.ProductPrice>${product.price}</S.ProductPrice>
        </S.PriceReviewWrapper>

        <S.AddToCardButton>
          Adicionar ao carrinho
          <FiShoppingCart />
        </S.AddToCardButton>
      </S.CardMain>
    </S.Container>
  );
};
