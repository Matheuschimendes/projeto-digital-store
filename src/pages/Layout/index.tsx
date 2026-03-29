import type { ReactNode } from "react";
import Header from "../../components/Header/page";
import Footer from "../../components/Footer/page";

type LayoutProps = {
  children: ReactNode;
  variant?: "default" | "home";
};

export default function Layout({ children, variant = "default" }: LayoutProps) {
  if (variant === "home") {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="flex-1">
          <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
