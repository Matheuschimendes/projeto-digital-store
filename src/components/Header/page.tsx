import type { FormEvent } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import miniCart from "../../assets/mini-cart.svg";
import Logo from "../Logo/page";

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
    `relative pb-1 text-sm font-semibold transition ${
      isActive
        ? "text-[var(--primary)] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-full after:bg-[var(--primary)]"
        : "text-[var(--dark-gray-2)] hover:text-[var(--primary)]"
    }`;

  return (
    <header className="border-b border-[var(--light-gray-3)] bg-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Logo />

          <form
            onSubmit={handleSearch}
            className="flex h-[60px] w-full max-w-[560px] items-center rounded-lg bg-[var(--light-gray-3)] px-4"
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

          <div className="flex items-center gap-6">
            <Link
              to="/cadastro"
              className="text-base text-[var(--dark-gray-2)] underline underline-offset-2"
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
              className="h-8 w-8 object-contain"
            />
          </div>
        </div>

        <nav className="mt-8 flex flex-wrap gap-8 pb-5">
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
        </nav>
      </div>
    </header>
  );
}
