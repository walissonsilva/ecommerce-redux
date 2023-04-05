import styled from "styled-components";

interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
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
