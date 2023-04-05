import React, { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
  const isLogged = true;
  const [showCart, setShowCart] = useState(false);

  return (
    <S.Container>
      <S.Navbar>
        <S.Brand>
          MyShop<span>.</span>
        </S.Brand>

        <S.NavbarActionsList>
          <S.ActionItem>
            {!isLogged ? (
              <S.LoginButton>
                Login
                <FiLogIn />
              </S.LoginButton>
            ) : (
              <S.LogoutButton>
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
