import { useNavigate } from "react-router-dom";
import type { Product } from "../../pages/SearchPage";

type ProductCardProps = {
    product: Product;
};

function ProductCard({ product }: ProductCardProps) {
    const navigate = useNavigate();

    return (
        <article
            onClick={() => navigate(`/products/${product.productCode}/`)}
            className="cursor-pointer rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md"
        >
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 text-gray-400">
                이미지
            </div>

            <p className="mb-1 text-sm text-gray-500">{product.category}</p>

            <h2 className="mb-3 font-bold">{product.name}</h2>

            <p className="font-semibold text-red-600">
                {product.price.toLocaleString()}원
            </p>
        </article>
    );
}

export default ProductCard;