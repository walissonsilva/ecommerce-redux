import React from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";

export const Header: React.FC = () => {
  const isLogged = true;

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
            <S.CartButton>
              Carrinho
              <FiShoppingCart />
            </S.CartButton>
          </S.ActionItem>
        </S.NavbarActionsList>
      </S.Navbar>
    </S.Container>
  );
};
