import type { Product, ProductTab } from "../types/product";

export const product: Product = {
  breadcrumb: ["홈", "tv", "LG OLED TV"],
  title: "LG OLED evo TV",
  subtitle: "OLED~~~~",
  price: "2,389,000원",
  imageSrc: "/images/tv-image.jpg",
  imageAlt: "LG OLED TV",
};

export const productTabs: ProductTab[] = [
  { id: "detail", label: "상세 정보", isActive: true },
  { id: "spec", label: "스펙" },
  { id: "review", label: "리뷰(20)" },
  { id: "manual", label: "매뉴얼" },
  { id: "qna", label: "Q&A" },
];
