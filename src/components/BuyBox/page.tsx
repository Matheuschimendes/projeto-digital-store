import type { ReactNode } from "react";
import { Star } from "lucide-react";

type BuyBoxProps = {
  name: string;
  reference?: string;
  stars?: number;
  rating?: number;
  price: number;
  priceDiscount?: number;
  description?: string;
  children?: ReactNode;
};

export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}: BuyBoxProps) {
  const hasDiscount = typeof priceDiscount === "number";

  return (
    <div className="w-full max-w-[440px]">
      <h1 className="text-[32px] font-bold leading-10 text-[var(--dark-gray)]">
        {name}
      </h1>

      {reference ? (
        <p className="mt-2 text-xs text-[var(--dark-gray-3)]">
          Referência: {reference}
        </p>
      ) : null}

      <div className="mt-4 flex items-center gap-3">
        {typeof stars === "number" ? (
          <div className="flex items-center gap-1 rounded bg-[var(--warning)] px-2 py-1 text-sm font-bold text-white">
            <span>{stars}</span>
            <Star size={14} fill="white" color="white" />
          </div>
        ) : null}

        {typeof rating === "number" ? (
          <span className="text-sm text-[var(--light-gray)]">
            ({rating} avaliações)
          </span>
        ) : null}
      </div>

      <div className="mt-6 flex items-center gap-3">
        {hasDiscount ? (
          <>
            <span className="text-[32px] font-bold text-[var(--dark-gray-2)]">
              R$ {priceDiscount!.toFixed(2)}
            </span>
            <span className="text-base text-[var(--light-gray-2)] line-through">
              R$ {price.toFixed(2)}
            </span>
          </>
        ) : (
          <span className="text-[32px] font-bold text-[var(--dark-gray-2)]">
            R$ {price.toFixed(2)}
          </span>
        )}
      </div>

      {description ? (
        <div className="mt-6">
          <h2 className="mb-2 text-sm font-bold text-[var(--dark-gray-2)]">
            Descrição do produto
          </h2>
          <p className="text-sm leading-6 text-[var(--dark-gray-2)]">
            {description}
          </p>
        </div>
      ) : null}

      <div className="mt-8 space-y-6">{children}</div>

      <button className="mt-8 h-[48px] rounded-lg bg-[var(--warning)] px-8 text-base font-bold text-white transition hover:opacity-90">
        COMPRAR
      </button>
    </div>
  );
}