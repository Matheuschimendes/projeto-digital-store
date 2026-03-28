import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = {
  src: string;
};

type GalleryProps = {
  images: GalleryImage[];
  width?: string;
  height?: string;
  radius?: string;
  className?: string;
  showThumbs?: boolean;
};

export default function Gallery({
  images,
  width = "100%",
  height = "400px",
  radius = "0px",
  className = "",
  showThumbs = false,
}: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = useMemo(() => images[currentIndex], [images, currentIndex]);

  function handlePrev() {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }

  function handleNext() {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
  }

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  if (!images.length) {
    return null;
  }

  return (
    <div className={className} style={{ width }}>
      <div
        className="relative overflow-hidden bg-[var(--light-gray-3)]"
        style={{ height, borderRadius: radius }}
      >
        <img
          src={currentImage.src}
          alt={`Imagem ${currentIndex + 1}`}
          className="h-full w-full object-cover"
          style={{ borderRadius: radius }}
        />

        <button
          type="button"
          onClick={handlePrev}
          disabled={isFirst}
          className={`absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow ${
            isFirst ? "cursor-not-allowed opacity-40" : "hover:bg-white"
          }`}
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={isLast}
          className={`absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow ${
            isLast ? "cursor-not-allowed opacity-40" : "hover:bg-white"
          }`}
          aria-label="Próxima imagem"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {showThumbs ? (
        <div className="mt-5 flex flex-wrap gap-4">
          {images.map((image, index) => {
            const isActive = index === currentIndex;

            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`overflow-hidden border-2 transition ${
                  isActive
                    ? "border-[var(--primary)]"
                    : "border-transparent"
                }`}
                style={{
                  width: "117px",
                  height: "95px",
                  borderRadius: radius,
                }}
                aria-label={`Selecionar imagem ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={`Miniatura ${index + 1}`}
                  className="h-full w-full object-cover"
                  style={{ borderRadius: radius }}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}