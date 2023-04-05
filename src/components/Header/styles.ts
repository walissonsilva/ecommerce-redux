import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  background-color: navy;
  color: white;

  span {
    color: violet;
  }
`;

export const Brand = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

export const Navbar = styled.nav`
  width: 100%;
  padding: 0 2rem;
  max-width: 1240px;
  margin: 0 auto;

  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarActionsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

export const ActionItem = styled.li``;

export const LoginButton = styled.button`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  height: 40px;
  padding: 0 2rem;

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

export const LogoutButton = styled.button`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  height: 40px;
  padding: 0 2rem;

  background-color: tomato;
  color: white;
  border: none;
  border-radius: 5px;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }
`;

export const CartButton = styled.button`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  height: 40px;
  padding: 0 2rem;

  background-color: violet;
  border: none;
  border-radius: 5px;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }
`;
