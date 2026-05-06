import type { Product } from "../types/product";
import { ProductImage } from "./ProductImage";
import { ProductSummary } from "./ProductSummary";

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <div className="mt-14 flex flex-col gap-12 md:flex-row md:items-start">
      <ProductImage src={product.imageSrc} alt={product.imageAlt} />
      <ProductSummary product={product} />
    </div>
  );
}
