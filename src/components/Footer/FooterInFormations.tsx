import { Link } from "react-router-dom";

type InformationItem = {
  text: string;
  link: string;
};

type FooterInformationsProps = {
  title: string;
  informations: InformationItem[];
};

export default function FooterInformations({
  title,
  informations,
}: FooterInformationsProps) {
  return (
    <div className="min-w-[180px]">
      <h3 className="mb-7 text-lg font-semibold text-white">{title}</h3>

      <ul className="space-y-4">
        {informations.map((item) => (
          <li key={`${item.text}-${item.link}`}>
            <Link
              to={item.link}
              className="text-sm text-white transition hover:opacity-80"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}