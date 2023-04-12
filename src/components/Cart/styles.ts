import styled from "styled-components";

interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.show ? "0" : "-400px")};

  height: 100vh;
  width: 400px;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);

  transition: 0.5s;
`;

export const CartTitle = styled.h2`
  color: black;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;

  list-style: none;
  margin-top: 2.5rem;
`;

export const CartItem = styled.li`
  color: black;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 1.2rem;
    color: red;
  }
`;

export const CardItemTitle = styled.h4`
  max-width: 80%;
  font-weight: 400;
`;

export const SummaryInfo = styled.p`
  color: black;
  padding: 2rem 0;
  font-size: 1.25rem;
  text-align: end;
`;

export const CartButtons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const ClearCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.6rem;
  height: 40px;
  padding: 0 2rem;
  width: 100%;

  background-color: violet;
  color: black;
  border: none;
  border-radius: 5px;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }
`;

export const CheckoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.6rem;
  height: 40px;
  padding: 0 2rem;
  width: 100%;

  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }
`;
