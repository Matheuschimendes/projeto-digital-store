import Layout from "../Layout";
import Section from "../../components/Section/page";
import ProductListing from "../../components/ProductListing/page";
import Gallery from "../../components/Gallery/page";
import { products } from "../../data/products";

const homeImages = [
  { src: "/home-slide-1.jpeg" },
  { src: "/home-slide-2.jpeg" },
  { src: "/home-slide-3.jpeg" },
  { src: "/home-slide-4.jpeg" },
];

const featuredCollections = [
  {
    id: 1,
    image: "/collection-1.png",

  },
  {
    id: 2,
    image: "/collection-2.png",
    
  },
  {
    id: 3,
    image: "/collection-3.png",
  },
];

export default function HomePage() {
  return (
    <Layout>
      <div className="bg-[var(--light-gray-3)]">
        <div className="mx-auto max-w-[1440px] px-6 py-8">
          <Gallery
            images={homeImages}
            width="100%"
            height="681px"
            radius="4px"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-14">
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

        <div className="mt-16">
          <Section title="Produtos em alta" titleAlign="left">
            <ProductListing products={products.slice(0, 8)} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}
