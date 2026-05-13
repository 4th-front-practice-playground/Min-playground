import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import CategoryTabs from "../components/search/CategoryTabs";
import SearchFilter from "../components/search/SearchFilter";
import SearchResultHeader from "../components/search/SearchResultHeader";
import ProductGrid from "../components/search/ProductGrid";

export type Product = {
  productCode: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
};

function SearchPage() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") ?? "TV";

  const products: Product[] = [
    {
      productCode: "TVT0001",
      name: "LG OLED evo TV",
      category: "TV",
      price: 2389000,
      imageUrl: "",
    },
    {
      productCode: "REF0001",
      name: "LG 디오스 냉장고",
      category: "냉장고",
      price: 1890000,
      imageUrl: "",
    },
    {
      productCode: "ACT0001",
      name: "LG 휘센 에어컨",
      category: "에어컨",
      price: 1590000,
      imageUrl: "",
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-8">
        <CategoryTabs selectedCategory={selectedCategory} />

        <div className="mt-6 grid gap-6 md:grid-cols-[240px_1fr]">
          <SearchFilter />

          <section className="space-y-5">
            <SearchResultHeader
              category={selectedCategory}
              count={filteredProducts.length}
            />

            <ProductGrid products={filteredProducts} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default SearchPage;