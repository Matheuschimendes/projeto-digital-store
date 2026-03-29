import type { FormEvent } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import Logo from "../Logo/page";
import miniCart from "../../assets/mini-cart.svg";

export default function Header() {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    const value = filter.trim();

    if (!value) {
      navigate("/products");
      return;
    }

    navigate(`/products?filter=${encodeURIComponent(value)}`);
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative pb-1 text-sm font-semibold transition whitespace-nowrap ${
      isActive
        ? "text-[var(--primary)] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-full after:bg-[var(--primary)]"
        : "text-[var(--dark-gray-2)] hover:text-[var(--primary)]"
    }`;

  return (
    <header className="border-b border-[var(--light-gray-3)] bg-white">
      <div className="mx-auto max-w-[1440px] px-4 pt-6 md:px-6 md:pt-8">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Logo />

            <img
              src={miniCart}
              alt="Carrinho de compras"
              className="h-8 w-8 object-contain xl:hidden"
            />
          </div>

          <form
            onSubmit={handleSearch}
            className="flex h-[56px] w-full items-center rounded-lg bg-[var(--light-gray-3)] px-4 xl:max-w-[560px]"
          >
            <input
              type="text"
              placeholder="Pesquisar produto..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="h-full flex-1 border-0 bg-transparent text-sm text-[var(--dark-gray-2)] outline-none placeholder:text-[var(--light-gray)]"
            />

            <button
              type="submit"
              className="flex h-10 w-10 items-center justify-center text-[var(--light-gray)] transition hover:text-[var(--primary)]"
              aria-label="Buscar produto"
            >
              <Search size={20} />
            </button>
          </form>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link
              to="/cadastro"
              className="text-sm text-[var(--dark-gray-2)] underline underline-offset-2 md:text-base"
            >
              Cadastre-se
            </Link>

            <Link
              to="/login"
              className="flex h-[40px] w-[114px] items-center justify-center rounded bg-[var(--primary)] text-sm font-bold text-white transition hover:opacity-90"
            >
              Entrar
            </Link>

            <img
              src={miniCart}
              alt="Carrinho de compras"
              className="hidden h-8 w-8 object-contain xl:block"
            />
          </div>
        </div>

        <nav className="mt-6 overflow-x-auto pb-4">
          <div className="flex min-w-max gap-6 md:gap-8">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>

            <NavLink to="/products" className={navLinkClass}>
              Produtos
            </NavLink>

            <NavLink to="/categorias" className={navLinkClass}>
              Categorias
            </NavLink>

            <NavLink to="/meus-pedidos" className={navLinkClass}>
              Meus Pedidos
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}