import Layout from "../Layout";
import Section from "../../components/Section/page";
import ProductListing from "../../components/ProductListing/page";
import { products } from "../../data/products";

export default function HomePage() {
  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-6 py-10">
        <Section title="Produtos em alta" titleAlign="left">
          <ProductListing products={products} />
        </Section>
      </div>
    </Layout>
  );
}