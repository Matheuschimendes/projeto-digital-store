import { Link } from "react-router-dom";
import logo from "../../assets/logo-header.svg";

type LogoProps = {
  isFooter?: boolean;
};

export default function Logo({ isFooter = false }: LogoProps) {
  return (
    <Link to="/" className="inline-flex items-center">
      <img
        src={logo}
        alt="Drip Store"
        width={253}
        height={44}
        className={isFooter ? "brightness-0 invert" : ""}
      />
    </Link>
  );
}