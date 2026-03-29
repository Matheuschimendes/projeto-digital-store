import { useState } from "react";
import clsx from "clsx";

type ProductOptionsProps = {
  options: string[];
  shape: "square" | "circle";
  type: "text" | "color";
  radius?: string;
};

export default function ProductOptions({
  options,
  shape,
  type,
  radius = "4px",
}: ProductOptionsProps) {
  const [selected, setSelected] = useState<string | null>(options[0] ?? null);

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isSelected = selected === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(option)}
            className={clsx(
              "flex items-center justify-center border text-sm font-bold transition",
              isSelected
                ? "border-[2px] border-[var(--primary)]"
                : "border border-[var(--light-gray-2)]",
              shape === "square" ? "h-[46px] min-w-[46px] px-4" : "h-[31px] w-[31px] rounded-full"
            )}
            style={{
              borderRadius: shape === "square" ? radius : "9999px",
              backgroundColor: type === "color" ? option : "transparent",
              color: type === "text" ? "var(--dark-gray-2)" : "transparent",
            }}
            aria-label={`Selecionar opção ${option}`}
          >
            {type === "text" ? option : ""}
          </button>
        );
      })}
    </div>
  );
}