import type { Product } from "../types/product";
import { ProductActions } from "./ProductActions";

interface ProductSummaryProps {
  product: Product;
}

export function ProductSummary({ product }: ProductSummaryProps) {
  return (
    <section className="flex min-h-[325px] flex-col md:w-[310px]" aria-label="상품 요약">
      <div className="space-y-1 text-4xl font-medium leading-tight text-neutral-950">
        <h1>{product.title}</h1>
        <p>{product.subtitle}</p>
        <p>{product.price}</p>
      </div>

      <ProductActions />
    </section>
  );
}
