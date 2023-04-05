import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;

  flex: 1 300px;

  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`;

export const CardHeader = styled.header``;

export const ProductImage = styled.img`
  width: 100%;
  padding: 2rem;
`;

export const CardMain = styled.main`
  padding: 0rem 2rem 2rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 300;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const PriceReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ProductReview = styled.div``;

export const ProductPrice = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
`;

export const AddToCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.6rem;
  height: 40px;
  padding: 0 2rem;
  width: 100%;

  background-color: navy;
  color: white;
  border: none;
  border-radius: 5px;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }
`;
