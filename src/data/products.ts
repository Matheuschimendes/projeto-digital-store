export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  priceDiscount?: number;
  category?: string;
  brand?: string;
  gender?: string;
  reference?: string;
  stars?: number;
  rating?: number;
  description?: string;
  sizes?: string[];
  colors?: string[];
  gallery?: { src: string }[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "K-Swiss V8 - Masculino",
    image: "/product-thumb-1.jpeg",
    price: 200,
    priceDiscount: 149.9,
    category: "Tênis",
    brand: "K-Swiss",
    gender: "Masculino",
    reference: "REF123456",
    stars: 4.7,
    rating: 90,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
    gallery: [
      { src: "/product-image-1.jpeg" },
      { src: "/product-image-2.jpeg" },
      { src: "/product-image-3.jpeg" },
      { src: "/product-image-4.jpeg" },
    ],
  },
  {
    id: 2,
    name: "Nike Revolution 6",
    image: "/product-thumb-2.jpeg",
    price: 249.9,
    priceDiscount: 199.9,
    category: "Tênis",
    brand: "Nike",
    gender: "Masculino",
    reference: "REF654321",
    stars: 4.5,
    rating: 75,
    description:
      "Modelo esportivo com excelente conforto, ideal para o dia a dia e atividades leves.",
    sizes: ["38", "39", "40", "41", "42"],
    colors: ["#000000", "#FFFFFF", "#C92071"],
    gallery: [
      { src: "/product-image-1.jpeg" },
      { src: "/product-image-2.jpeg" },
      { src: "/product-image-3.jpeg" },
      { src: "/product-image-4.jpeg" },
    ],
  },
  {
    id: 3,
    name: "Adidas Runner",
    image: "/product-thumb-3.jpeg",
    price: 179.9,
    category: "Tênis",
    brand: "Adidas",
    gender: "Feminino",
    reference: "REF111222",
    stars: 4.2,
    rating: 61,
    description:
      "Tênis leve e confortável para corridas leves e caminhadas.",
    sizes: ["36", "37", "38", "39"],
    colors: ["#B5B6F2", "#EE4266", "#1F1F1F"],
    gallery: [
      { src: "/product-image-1.jpeg" },
      { src: "/product-image-2.jpeg" },
      { src: "/product-image-3.jpeg" },
      { src: "/product-image-4.jpeg" },
    ],
  },
  {
    id: 4,
    name: "Puma Street Wear",
    image: "/product-thumb-4.jpeg",
    price: 299.9,
    priceDiscount: 239.9,
    category: "Tênis",
    brand: "Puma",
    gender: "Masculino",
    reference: "REF333444",
    stars: 4.8,
    rating: 110,
    description:
      "Design urbano com visual moderno e acabamento premium.",
    sizes: ["39", "40", "41", "42"],
    colors: ["#F6AA1C", "#1F1F1F", "#FFFFFF"],
    gallery: [
      { src: "/product-image-1.jpeg" },
      { src: "/product-image-2.jpeg" },
      { src: "/product-image-3.jpeg" },
      { src: "/product-image-4.jpeg" },
    ],
  },
  {
    id: 5,
    name: "Tênis Casual Urban",
    image: "/product-thumb-5.jpeg",
    price: 159.9,
    category: "Tênis",
    brand: "K-Swiss",
    gender: "Unissex",
    reference: "REF555666",
    stars: 4.0,
    rating: 45,
    description:
      "Modelo casual e versátil para combinar com diferentes estilos.",
    sizes: ["37", "38", "39", "40", "41"],
    colors: ["#474747", "#CCCCCC", "#C92071"],
    gallery: [
      { src: "/product-image-1.jpeg" },
      { src: "/product-image-2.jpeg" },
      { src: "/product-image-3.jpeg" },
      { src: "/product-image-4.jpeg" },
    ],
  },
  {
    id: 6,
    name: "Tênis Energy Boost",
    image: "/product-thumb-1.jpeg",
    price: 320,
    priceDiscount: 279.9,
    category: "Tênis",
    brand: "Adidas",
    gender: "Masculino",
  },
  {
    id: 7,
    name: "Tênis Fit One",
    image: "/product-thumb-2.jpeg",
    price: 190,
    category: "Tênis",
    brand: "Nike",
    gender: "Feminino",
  },
  {
    id: 8,
    name: "Tênis Sport Max",
    image: "/product-thumb-3.jpeg",
    price: 260,
    priceDiscount: 219.9,
    category: "Tênis",
    brand: "Puma",
    gender: "Unissex",
  },
];