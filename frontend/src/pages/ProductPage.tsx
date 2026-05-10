import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductSummary from "../components/product/ProductSummary";
import ProductActions from "../components/product/ProductActions";
import ProductTabs from "../components/product/ProductTabs";

export type ProductDetail = {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
};

function ProductPage() {
  const navigate = useNavigate();
  const { productId } = useParams();

  // 나중에 productId로 백엔드 상품 상세 API 호출
  const product: ProductDetail = {
    id: Number(productId),
    name: "LG OLED evo TV",
    category: "TV",
    price: 2389000,
    imageUrl: "",
    description: "선명한 화질과 몰입감 있는 시청 경험을 제공하는 OLED TV입니다.",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
          >
            ← 이전으로
          </button>
        </div>

        <ProductSummary product={product} />
        <ProductActions />
        <ProductTabs product={product} />
      </main>
    </div>
  );
}

export default ProductPage;