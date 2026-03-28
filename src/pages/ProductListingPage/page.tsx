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
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "highest") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filter, sortBy]);

  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-6 py-10">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full max-w-[308px]">
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

            <div className="mt-10 rounded-lg bg-white p-8 shadow-sm">
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
          </div>

          <div className="flex-1">
            <Section
              title={`${filteredProducts.length} produtos encontrados`}
              titleAlign="left"
            >
              <ProductListing products={filteredProducts} />
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}