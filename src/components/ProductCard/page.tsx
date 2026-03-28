import { Link } from "react-router-dom";
import type { Product } from "../../data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = typeof product.priceDiscount === "number";

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block w-full max-w-[292px]"
    >
      <div className="overflow-hidden rounded bg-white">
        <div className="flex h-[321px] items-center justify-center rounded bg-[var(--light-gray-3)] p-4">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="pt-4">
          <span className="text-xs font-semibold text-[var(--light-gray)]">
            {product.category || "Tênis"}
          </span>

          <h3 className="mt-2 text-2xl font-normal leading-8 text-[var(--dark-gray-2)]">
            {product.name}
          </h3>

          <div className="mt-3 flex items-center gap-2">
            <span
              className={`text-2xl ${
                hasDiscount
                  ? "text-[var(--light-gray)] line-through"
                  : "font-bold text-[var(--dark-gray)]"
              }`}
            >
              R$ {product.price.toFixed(2)}
            </span>

            {hasDiscount ? (
              <span className="text-2xl font-bold text-[var(--dark-gray)]">
                R$ {product.priceDiscount!.toFixed(2)}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}