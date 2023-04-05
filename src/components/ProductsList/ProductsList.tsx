import React from "react";

import * as S from "./styles";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductsList: React.FC = () => {
  return (
    <S.Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </S.Container>
  );
};
