import React from "react";
import { FiLogIn, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";

export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Navbar>
        <S.Brand>
          MyShop<span>.</span>
        </S.Brand>

        <S.NavbarActionsList>
          <S.ActionItem>
            <S.LoginButton>
              Login
              <FiLogIn />
            </S.LoginButton>
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
