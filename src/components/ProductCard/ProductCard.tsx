import { Dispatch } from "redux";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/rootReducer";
import { CartAction } from "../../redux/CartReducer/cart-reducer";

import * as S from "./styles";
import { addProduct, removeProduct } from "../../redux/CartReducer/slice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch: Dispatch<CartAction> = useDispatch();

  const isOnCart =
    cart.findIndex((cartProduct) => cartProduct.id === product.id) !== -1;

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />

      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          ({` ${product.rating.rate}`})
        </S.Review>

        <S.Price>${product.price}</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCartButtonWrapper>
        {!isOnCart ? (
          <S.AddToCartButton onClick={() => dispatch(addProduct(product))}>
            Adicionar ao carrinho
            <FiShoppingCart />
          </S.AddToCartButton>
        ) : (
          <S.RemoveFromCartButton
            onClick={() => dispatch(removeProduct(product))}
          >
            Remover do carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>
        )}
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};
