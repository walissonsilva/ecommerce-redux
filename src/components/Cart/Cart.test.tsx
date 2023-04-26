import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { Product } from "../../data/products";

const products: Product[] = [
  {
    id: 1,
    title: "Fake Product 1",
    category: "",
    description: "",
    image: "",
    price: 10,
    rating: { count: 1, rate: 5 },
  },
  {
    id: 2,
    title: "Fake Product 2",
    category: "",
    description: "",
    image: "",
    price: 10,
    rating: { count: 1, rate: 5 },
  },
];

describe("Cart component > Unit tests", () => {
  it("should render correctly when there are no products on cart", () => {
    render(<Cart products={[]} showCart={true} />);

    const cartTitle = screen.getByRole("heading", { level: 1 });
    const productsList = screen.getByRole("list");

    expect(cartTitle).toHaveTextContent(/carrinho/i);
    expect(productsList).toBeEmptyDOMElement();
  });

  it("should render correctly when there are products on cart", () => {
    render(<Cart products={products} showCart={true} />);

    const productsList = screen.getByRole("list");
    const productsElements = screen.getAllByRole("listitem");

    expect(productsList.childNodes).toHaveLength(2);
    expect(productsElements[0]).toHaveTextContent("Fake Product 1");
    expect(productsElements[1]).toHaveTextContent("Fake Product 2");
  });
});
