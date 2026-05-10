import ProductCard from "./ProductCard";
import type { Product } from "../../pages/SearchPage";

type ProductGridProps = {
    products: Product[];
};

function ProductGrid({ products }: ProductGridProps) {
    if (products.length === 0) {
        return (
            <div className="rounded-2xl border bg-white p-10 text-center text-gray-500">
                검색 결과가 없습니다.
            </div>
        );
    }

    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductGrid;