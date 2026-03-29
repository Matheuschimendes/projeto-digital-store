import { useParams } from "react-router-dom";
import Layout from "../Layout";
import Gallery from "../../components/Gallery/page";
import BuyBox from "../../components/BuyBox/page";
import ProductOptions from "../../components/ProductOptions/page";
import ProductListing from "../../components/ProductListing/page";
import Section from "../../components/Section/page";
import { products } from "../../data/products";

export default function ProductViewPage() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Layout>
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6">
          <p className="text-lg text-[var(--dark-gray-2)]">
            Produto não encontrado.
          </p>
        </div>
      </Layout>
    );
  }

  const recommendedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      <div className="bg-[var(--light-gray-3)]">
        <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-10">
          <div className="grid gap-8 xl:grid-cols-[700px_1fr] xl:gap-10">
            <Gallery
              images={product.gallery ?? [{ src: product.image }]}
              width="100%"
              height="clamp(320px, 55vw, 570px)"
              radius="4px"
              showThumbs
            />

            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
            >
              {product.sizes?.length ? (
                <div>
                  <h3 className="mb-3 text-sm font-bold text-[var(--dark-gray-2)]">
                    Tamanho
                  </h3>
                  <ProductOptions
                    options={product.sizes}
                    shape="square"
                    type="text"
                    radius="4px"
                  />
                </div>
              ) : null}

              {product.colors?.length ? (
                <div>
                  <h3 className="mb-3 text-sm font-bold text-[var(--dark-gray-2)]">
                    Cor
                  </h3>
                  <ProductOptions
                    options={product.colors}
                    shape="circle"
                    type="color"
                  />
                </div>
              ) : null}
            </BuyBox>
          </div>

          <div className="mt-16 md:mt-20">
            <Section
              title="Produtos recomendados"
              titleAlign="left"
              link={{ text: "Ver todos", href: "/products" }}
            >
              <ProductListing products={recommendedProducts} />
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}