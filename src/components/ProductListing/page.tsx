import type { Product } from "../../data/products";
import ProductCard from "../ProductCard/page";

type ProductListingProps = {
  products: Product[];
};

export default function ProductListing({ products }: ProductListingProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
