import type { ReactNode } from "react";
import Header from "../../components/Header/page";
import Footer from "../../components/Footer/page";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div> 
  )
}