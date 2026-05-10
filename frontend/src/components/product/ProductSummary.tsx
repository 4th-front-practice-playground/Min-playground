import type { ProductDetail } from "../../pages/ProductPage";

type ProductSummaryProps = {
    product: ProductDetail;
};

function ProductSummary({ product }: ProductSummaryProps) {
    return (
        <section className="grid gap-8 rounded-2xl border bg-white p-6 shadow-sm md:grid-cols-[1fr_1fr]">
            <div className="flex h-80 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
                상품 이미지
            </div>

            <div className="flex flex-col justify-center">
                <p className="mb-2 text-sm font-medium text-red-600">
                    {product.category}
                </p>

                <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>

                <p className="mb-6 text-gray-600">{product.description}</p>

                <p className="text-2xl font-bold text-red-600">
                    {product.price.toLocaleString()}원
                </p>
            </div>
        </section>
    );
}

export default ProductSummary;