type FilterOption = {
  text: string;
  value?: string;
};

type FilterGroupProps = {
  title: string;
  inputType: "checkbox" | "radio";
  options: FilterOption[];
  name?: string;
};

export default function FilterGroup({
  title,
  inputType,
  options,
  name,
}: FilterGroupProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-[var(--dark-gray-2)]">{title}</h3>

      <div className="space-y-3">
        {options.map((option, index) => {
          const inputId = `${title}-${index}`;
          const inputValue = option.value ?? option.text.toLowerCase();

          return (
            <label
              key={inputId}
              htmlFor={inputId}
              className="flex items-center gap-3 text-sm text-[var(--dark-gray-2)]"
            >
              <input
                id={inputId}
                type={inputType}
                name={name || title}
                value={inputValue}
                className="h-[22px] w-[22px] accent-[var(--primary)]"
              />
              <span>{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}