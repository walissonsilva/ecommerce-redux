import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import * as S from "./styles";
import { Product } from "../../types/Product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootState) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  const isOnCart = cart.find((cartProduct) => cartProduct.id === product.id);

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
                <AiFillStar key={index} />
              ) : (
                <AiOutlineStar key={index} />
              )
            )}{" "}
            <span>({product.rating.rate})</span>
          </S.ProductReview>
          <S.ProductPrice>${product.price}</S.ProductPrice>
        </S.PriceReviewWrapper>

        <S.AddToCardButton
          isOnCart={Boolean(isOnCart)}
          onClick={() =>
            dispatch({
              type: isOnCart ? "cart/remove-product" : "cart/add-product",
              payload: product,
            })
          }
        >
          {!isOnCart ? "Adicionar ao carrinho" : "Remover do carrinho"}
          <FiShoppingCart />
        </S.AddToCardButton>
      </S.CardMain>
    </S.Container>
  );
};
