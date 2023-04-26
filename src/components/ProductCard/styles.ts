import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;

  min-height: 3rem;

  margin-top: 1rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;

  font-size: 0.7rem;

  svg {
    font-size: 1rem;
  }
`;

export const Price = styled.strong``;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin-top: 1rem;
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  background-color: blue;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  svg {
    font-size: 0.7rem;
  }
`;

export const RemoveFromCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  background-color: violet;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  svg {
    font-size: 0.7rem;
  }
`;
