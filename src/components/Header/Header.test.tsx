import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";
import { Product } from "../../data/products";

const product: Product = {
  id: 1,
  title: "",
  category: "",
  description: "",
  image: "",
  price: 10,
  rating: { count: 1, rate: 5 },
};

jest.mock("react-redux", () => {
  return {
    useDispatch: () => jest.fn(),
    useSelector: () => ({
      cart: [],
      user: null,
    }),
  };
});

describe("Unit tests", () => {
  describe("General behaviour", () => {
    test("should render correctly", () => {
      render(<Header />);

      const cartButton = screen.getByRole("button", { name: "Carrinho" });
      const loginButton = screen.getByRole("button", { name: "Login" });
      const cartSectionTitle = screen.getByTestId("cart");
      const brandTitle = screen.getByRole("heading", {
        level: 1,
        name: /myshop./i,
      });

      expect(brandTitle).toBeInTheDocument();
      expect(cartButton).toBeInTheDocument();
      expect(loginButton).toBeInTheDocument();
      expect(cartSectionTitle).toBeInTheDocument();
      expect(cartSectionTitle).toHaveStyle("right: -350px");
    });
  });

  describe("Cart Sidebar Behaviour", () => {
    test("should show cart sidebar on click over cart button", () => {
      render(<Header />);

      const cartButton = screen.getByRole("button", { name: "Carrinho" });
      const cartSideBar = screen.getByTestId("cart");

      userEvent.click(cartButton);

      expect(cartSideBar).toHaveStyle("right: 0px");
      expect(cartButton).toHaveTextContent(/carrinho/i);
    });

    test("should hide cart sidebar on click twice over cart button", () => {
      render(<Header />);

      const cartButton = screen.getByRole("button", { name: /carrinho/i });
      const cartSideBar = screen.getByTestId("cart");

      userEvent.click(cartButton); // abrindo o carrinho
      userEvent.click(cartButton); // fechando o carrinho

      expect(cartSideBar).toHaveStyle("right: -350px");
    });
  });
});
