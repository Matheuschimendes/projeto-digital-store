import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type SectionLink = {
  text: string;
  href: string;
};

type SectionProps = {
  title: string;
  titleAlign?: "left" | "center";
  link?: SectionLink;
  children: ReactNode;
};

export default function Section({
  title,
  titleAlign = "left",
  link,
  children,
}: SectionProps) {
  const isCenter = titleAlign === "center";

  return (
    <section className="w-full">
      <div
        className={`mb-5 flex items-center ${
          isCenter ? "justify-center" : "justify-between"
        }`}
      >
        <h2
          className={`text-2xl font-bold text-[var(--dark-gray-2)] ${
            isCenter ? "text-center" : "text-left"
          }`}
        >
          {title}
        </h2>

        {!isCenter && link ? (
          <Link
            to={link.href}
            className="text-lg font-medium text-[var(--primary)] hover:opacity-80"
          >
            {link.text}
          </Link>
        ) : null}
      </div>

      <div>{children}</div>
    </section>
  );
}