export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  priceDiscount?: number;
  category?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "K-Swiss V8 - Masculino",
    image: "/product-thumb-1.jpeg",
    price: 200,
    priceDiscount: 149.9,
    category: "Tênis",
  },
  {
    id: 2,
    name: "Nike Revolution 6",
    image: "/product-thumb-2.jpeg",
    price: 249.9,
    priceDiscount: 199.9,
    category: "Tênis",
  },
  {
    id: 3,
    name: "Adidas Runner",
    image: "/product-thumb-3.jpeg",
    price: 179.9,
    category: "Tênis",
  },
  {
    id: 4,
    name: "Puma Street Wear",
    image: "/product-thumb-4.jpeg",
    price: 299.9,
    priceDiscount: 239.9,
    category: "Tênis",
  },
  {
    id: 5,
    name: "Tênis Casual Urban",
    image: "/product-thumb-5.jpeg",
    price: 159.9,
    category: "Tênis",
  },
  {
    id: 6,
    name: "Tênis Energy Boost",
    image: "/product-thumb-1.jpeg",
    price: 320,
    priceDiscount: 279.9,
    category: "Tênis",
  },
  {
    id: 7,
    name: "Tênis Fit One",
    image: "/product-thumb-2.jpeg",
    price: 190,
    category: "Tênis",
  },
  {
    id: 8,
    name: "Tênis Sport Max",
    image: "/product-thumb-3.jpeg",
    price: 260,
    priceDiscount: 219.9,
    category: "Tênis",
  },
];
