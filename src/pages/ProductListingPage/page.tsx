import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../Layout";
import Section from "../../components/Section/page";
import ProductListing from "../../components/ProductListing/page";
import FilterGroup from "../../components/FilterGroup/page";
import { products } from "../../data/products";

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("");

  const filter = searchParams.get("filter")?.toLowerCase().trim() || "";

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filter) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(filter)
      );
    }

    if (sortBy === "lowest") {
      result.sort(
        (a, b) => (a.priceDiscount ?? a.price) - (b.priceDiscount ?? b.price)
      );
    }

    if (sortBy === "highest") {
      result.sort(
        (a, b) => (b.priceDiscount ?? b.price) - (a.priceDiscount ?? a.price)
      );
    }

    return result;
  }, [filter, sortBy]);

  return (
    <Layout>
      <div className="bg-[var(--light-gray-3)]">
        <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-10">
          <div className="grid gap-8 xl:grid-cols-[308px_1fr]">
            <aside>
              <label className="mb-2 block text-base font-bold text-[var(--dark-gray-2)]">
                Ordenar por
              </label>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-[60px] w-full rounded-lg border border-[var(--light-gray-2)] bg-white px-4 text-[var(--dark-gray-2)] outline-none"
              >
                <option value="">Selecione</option>
                <option value="lowest">Menor preço</option>
                <option value="highest">Maior preço</option>
              </select>

              <div className="mt-8 rounded-lg bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-base font-bold text-[var(--dark-gray-2)]">
                  Filtrar por
                </h2>

                <hr className="my-4 border-[var(--light-gray-2)]" />

                <div className="space-y-8">
                  <FilterGroup
                    title="Marca"
                    inputType="checkbox"
                    options={[
                      { text: "Adidas", value: "adidas" },
                      { text: "Nike", value: "nike" },
                      { text: "Puma", value: "puma" },
                      { text: "K-Swiss", value: "kswiss" },
                    ]}
                  />

                  <FilterGroup
                    title="Categoria"
                    inputType="checkbox"
                    options={[
                      { text: "Esporte e lazer", value: "esporte" },
                      { text: "Casual", value: "casual" },
                      { text: "Utilitário", value: "utilitario" },
                      { text: "Corrida", value: "corrida" },
                    ]}
                  />

                  <FilterGroup
                    title="Gênero"
                    inputType="checkbox"
                    options={[
                      { text: "Masculino", value: "masculino" },
                      { text: "Feminino", value: "feminino" },
                      { text: "Unissex", value: "unissex" },
                    ]}
                  />

                  <FilterGroup
                    title="Estado"
                    inputType="radio"
                    name="state"
                    options={[
                      { text: "Novo", value: "novo" },
                      { text: "Usado", value: "usado" },
                    ]}
                  />
                </div>
              </div>
            </aside>

            <div>
              <Section
                title={`${filteredProducts.length} produtos encontrados`}
                titleAlign="left"
              >
                <ProductListing products={filteredProducts} />
              </Section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}