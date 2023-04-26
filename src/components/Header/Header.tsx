import { Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../Cart/Cart";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { RootReducer } from "../../redux/rootReducer";
import { UserDispatchAction } from "../../redux/UserReducer/userReducer";

import * as S from "./styles";

export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch: Dispatch<UserDispatchAction> = useDispatch();

  const isLogged = user !== null;

  function handleClickOnLoginButton() {
    if (!user) {
      // dispatch para logar o usuário
      dispatch({
        type: "user/login",
        payload: {
          id: "1",
          name: "Walisson Silva",
          email: "walisson@email.com",
          picture: "",
        },
      });
    } else {
      // dispatch para deslogar o usuário
      dispatch({ type: "user/logout" });
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleClickOnLoginButton}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} products={cart} />
    </S.StyledHeader>
  );
};
