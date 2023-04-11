import React, { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../../redux/user/reducer";
import { Cart } from "../Cart/Cart";
import * as S from "./styles";
import { RootState } from "../../redux/root-reducer";

export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const { currentUser } = useSelector(
    (rootReducer: RootState) => rootReducer.userReducer
  );
  const dispatch = useDispatch();

  function handleLoginClick() {
    dispatch({ type: UserActions.LOGIN });
  }

  function handleLogoutClick() {
    dispatch({ type: UserActions.LOGOUT });
  }

  return (
    <S.Container>
      <S.Navbar>
        <S.Brand>
          MyShop<span>.</span>
        </S.Brand>

        <S.NavbarActionsList>
          <S.ActionItem>
            {!currentUser ? (
              <S.LoginButton onClick={handleLoginClick}>
                Login
                <FiLogIn />
              </S.LoginButton>
            ) : (
              <S.LogoutButton onClick={handleLogoutClick}>
                Logout
                <FiLogOut />
              </S.LogoutButton>
            )}
          </S.ActionItem>

          <S.ActionItem>
            <S.CartButton onClick={() => setShowCart(!showCart)}>
              Carrinho
              <FiShoppingCart />
            </S.CartButton>
          </S.ActionItem>
        </S.NavbarActionsList>
      </S.Navbar>

      <Cart show={showCart} />
    </S.Container>
  );
};
