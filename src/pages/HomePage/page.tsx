import Layout from "../Layout";
import Section from "../../components/Section/page";
import ProductListing from "../../components/ProductListing/page";
import { products } from "../../data/products";
import {
  Headphones,
  HatGlasses,
  Ruler,
  Shirt,
  SportShoe,
} from "lucide-react";

const featuredCollections = [
  {
    id: 1,
    image: "/collection-1.png",
    title: "Novo drop\nSupreme",
    tag: "30% OFF",
  },
  {
    id: 2,
    image: "/collection-2.png",
    title: "Coleção\nAdidas",
    tag: "30% OFF",
  },
  {
    id: 3,
    image: "/collection-3.png",
    title: "Novo\nBeats Bass",
    tag: "30% OFF",
  },
];

const featuredCategories = [
  { id: 1, label: "Camisetas", icon: Shirt },
  { id: 2, label: "Calças", icon: Ruler },
  { id: 3, label: "Bonés", icon: HatGlasses },
  { id: 4, label: "Headphones", icon: Headphones },
  { id: 5, label: "Tênis", icon: SportShoe },
];

export default function HomePage() {
  return (
    <Layout variant="home">
      <div className="bg-white">
        <div className="relative py-14 lg:py-20">
          <div className="pointer-events-none absolute right-4 top-6 hidden h-40 w-40 rounded-full bg-[radial-gradient(#F6C044_2px,transparent_2px)] [background-size:12px_12px] opacity-60 lg:block" />

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="max-w-[540px]">
              <span className="text-sm font-semibold text-[var(--primary)]">
                Melhores ofertas personalizadas
              </span>

              <h2 className="mt-5 text-[40px] font-extrabold leading-[1.05] text-[var(--dark-gray)] sm:text-[52px] lg:text-[64px]">
                Queima de estoque Nike{" "}
                <span className="inline-block align-middle">🔥</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--dark-gray-2)] sm:text-base">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>

              <button className="mt-8 inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-9 py-3 text-sm font-bold text-white transition hover:opacity-90">
                Ver Ofertas
              </button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[640px]">
                <div
                  className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-[#f2e9ff] blur-xl"
                  aria-hidden
                />
                <img
                  src="/hero-shoe.png"
                  alt="Tênis Nike em destaque"
                  className="relative w-full max-w-[620px] rotate-[-12deg] object-contain sm:scale-110 lg:scale-125 lg:translate-x-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[var(--primary)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--light-gray-2)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--light-gray-2)]" />
          </div>
        </div>
      </div>

      <div className="space-y-14 py-14 md:space-y-16 md:py-16">
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen ">
          <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 md:py-14 lg:px-8">
            <Section title="Coleções em destaque" titleAlign="center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredCollections.map((collection) => (
              <div
                key={collection.id}
                className="relative overflow-hidden rounded-[4px] bg-[var(--light-gray-3)]"
              >
                <img
                  src={collection.image}
                  
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-2 ml-2 flex flex-col items-start justify-between">
                  <span className="inline-flex rounded-full bg-[#E7FF86] px-4 py-2 text-sm font-bold text-[var(--dark-gray-2)]">
                    30% OFF
                  </span>

                  <button className="rounded-lg bg-white px-7 py-3 text-sm font-bold text-[var(--primary)] transition hover:opacity-90">
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Section>

          </div>
        </div>

        <Section title="Coleções em destaque" titleAlign="center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {featuredCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.id}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--light-gray-2)] bg-white text-[var(--primary)] shadow-[0_10px_20px_rgba(0,0,0,0.04)]">
                    <Icon size={30} />
                  </div>

                  <span className="text-sm font-semibold text-[var(--dark-gray-2)]">
                    {category.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Section>

        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/products" }}
        >
          <ProductListing products={products.slice(0, 8)} />
        </Section>

        <section className="py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div className="relative flex items-center justify-center lg:justify-start">
              <div
                className="pointer-events-none absolute left-0 top-[46%] h-[380px] w-[380px] -translate-x-1/4 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#FFFFFF_0%,#F7F2FF_38%,#EEE6FF_70%,#F7F2FF_100%)] sm:h-[480px] sm:w-[480px] lg:h-[520px] lg:w-[520px]"
                aria-hidden
              />

              <img
                src="/special-offer-shoes.png"
                alt="Air Jordan edição de colecionador"
                className="relative z-10 w-full max-w-[640px] object-contain [filter:drop-shadow(0_22px_30px_rgba(0,0,0,0.12))] lg:-translate-x-6"
              />
            </div>

            <div className="max-w-[560px]">
              <span className="text-sm font-semibold text-[var(--primary)]">
                Oferta especial
              </span>

              <h3 className="mt-4 text-[40px] font-extrabold leading-[1.05] tracking-tight text-[var(--dark-gray-2)] sm:text-[56px]">
                Air Jordan edição de
                <span className="block">colecionador</span>
              </h3>

              <p className="mt-6 text-base leading-8 text-[var(--dark-gray-3)] sm:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>

              <button className="mt-10 inline-flex h-14 w-[240px] items-center justify-center rounded-lg bg-[var(--primary)] text-base font-bold text-white shadow-[0_18px_30px_rgba(201,32,113,0.22)] transition hover:opacity-90">
                Ver Oferta
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
