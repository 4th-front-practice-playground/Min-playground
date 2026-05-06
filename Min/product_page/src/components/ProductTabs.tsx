import type { ProductTab } from "../types/product";

interface ProductTabsProps {
  tabs: ProductTab[];
}

export function ProductTabs({ tabs }: ProductTabsProps) {
  return (
    <nav
      className="mt-12 grid grid-cols-2 border-4 border-neutral-100 bg-white text-center sm:grid-cols-5"
      aria-label="상품 상세 메뉴"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-3 py-4 text-3xl font-semibold transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand ${
            tab.isActive ? "text-brand" : "text-neutral-950"
          }`}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
