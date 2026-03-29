import Logo from "../Logo/page";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import FooterInformations from "./FooterInFormations";

const informationLinks = [
  { text: "Sobre Drip Store", link: "/about" },
  { text: "Segurança", link: "/seguranca" },
  { text: "Wishlist", link: "/wishlist" },
  { text: "Blog", link: "/blog" },
  { text: "Trabalhe conosco", link: "/trabalhe-conosco" },
  { text: "Meus Pedidos", link: "/meus-pedidos" },
];

const categoryLinks = [
  { text: "Camisetas", link: "/products?category=camisetas" },
  { text: "Calças", link: "/products?category=calcas" },
  { text: "Bonés", link: "/products?category=bones" },
  { text: "Headphones", link: "/products?category=headphones" },
  { text: "Tênis", link: "/products?category=tenis" },
];

const contactLinks = [
  {
    text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
    link: "#",
  },
  { text: "(85) 3051-3411", link: "tel:+558530513411" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-[var(--dark-gray)] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo isFooter />

            <p className="mt-8 max-w-[307px] text-sm leading-7 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <img src={facebook} alt="Facebook" className="h-5 w-5" />
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Instagram" className="h-5 w-5" />
              </a>

              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <img src={twitter} alt="Twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <FooterInformations title="Informação" informations={informationLinks} />
          <FooterInformations title="Categorias" informations={categoryLinks} />
          <FooterInformations title="Contato" informations={contactLinks} />
        </div>

        <hr className="my-10 border-[var(--dark-gray-3)]" />

        <p className="text-center text-sm text-white">© 2026 Digital Store</p>
      </div>
    </footer>
  );
}