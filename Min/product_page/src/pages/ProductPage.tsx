import { Breadcrumb } from "../components/Breadcrumb";
import { Header } from "../components/Header";
import { ProductHero } from "../components/ProductHero";
import { ProductTabs } from "../components/ProductTabs";
import { product, productTabs } from "../data/product";

export function ProductPage() {
  return (
    <main className="min-h-screen bg-neutral-700 p-3">
      <div className="mx-auto min-h-[calc(100vh-24px)] max-w-[930px] bg-white px-7 py-8">
        <Header />
        <Breadcrumb items={product.breadcrumb} />
        <ProductHero product={product} />
        <ProductTabs tabs={productTabs} />
      </div>
    </main>
  );
}
