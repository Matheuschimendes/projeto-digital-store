import Layout from "../Layout";

export default function MyOrdersPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6">
        <h1 className="text-2xl font-bold text-[var(--dark-gray-2)]">
          Meus Pedidos
        </h1>
        <p className="mt-3 text-sm text-[var(--dark-gray-2)]">
          Aqui você poderá acompanhar seus pedidos em breve.
        </p>
      </div>
    </Layout>
  );
}
