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

export default function HomePage() {
  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-6 py-10">
        <Gallery
          images={homeImages}
          width="100%"
          height="681px"
          radius="4px"
        />

        <div className="mt-14">
          <Section title="Produtos em alta" titleAlign="left">
            <ProductListing products={products} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}