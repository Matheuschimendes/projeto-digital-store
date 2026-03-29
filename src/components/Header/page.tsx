import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import Logo from "../Logo/page";
import miniCart from "../../assets/mini-cart.svg";

export default function Header() {
  const [filter, setFilter] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `w-fit text-base font-semibold transition ${
      isActive
        ? "text-[var(--primary)] underline underline-offset-4"
        : "text-[var(--dark-gray-2)] hover:text-[var(--primary)]"
    }`;

  return (
    <header className="border-b border-[var(--light-gray-3)] bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-4 lg:px-6 lg:pt-6 lg:pb-0">
        <div className="flex items-center justify-between lg:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="rounded p-2 text-[var(--dark-gray-2)] transition hover:text-[var(--primary)]"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu size={24} />
          </button>

          <Logo />

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded p-2 text-[var(--light-gray)] transition hover:text-[var(--primary)]"
              aria-label="Buscar produto"
            >
              <Search size={20} />
            </button>

            <button
              type="button"
              className="relative rounded p-1"
              aria-label="Carrinho de compras"
            >
              <img
                src={miniCart}
                alt=""
                className="h-6 w-6 object-contain"
              />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)] text-[11px] font-bold text-white">
                2
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
            <button
              type="button"
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
            />

            <div
              id="mobile-menu"
              className="relative z-10 flex h-full w-[82%] max-w-[320px] flex-col bg-white px-6 py-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--dark-gray-2)]">
                  Páginas
                </span>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded p-2 text-[var(--dark-gray-2)] transition hover:text-[var(--primary)]"
                  aria-label="Fechar menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-4">
                <NavLink
                  to="/"
                  className={mobileNavLinkClass}
                  end
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/products"
                  className={mobileNavLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Produtos
                </NavLink>

                <NavLink
                  to="/categorias"
                  className={mobileNavLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorias
                </NavLink>

                <NavLink
                  to="/meus-pedidos"
                  className={mobileNavLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Meus Pedidos
                </NavLink>
              </nav>

              <div className="mt-auto border-t border-[var(--light-gray-3)] pt-6">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-[44px] w-full items-center justify-center rounded bg-[var(--primary)] text-sm font-bold text-white transition hover:opacity-90"
                >
                  Entrar
                </Link>

                <Link
                  to="/cadastro"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 flex w-full items-center justify-center text-sm text-[var(--dark-gray-2)] underline underline-offset-4"
                >
                  Cadastre-se
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <div className="hidden lg:block">
          <div className="flex items-center justify-between gap-6">
            <Logo />

            <form
              onSubmit={handleSearch}
              className="flex h-[56px] w-full max-w-[560px] items-center rounded-lg bg-[var(--light-gray-3)] px-4"
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
      </div>
    </header>
  );
}
