import { useState } from "react";
import type { ProductDetail } from "../../pages/ProductPage";

type ProductTabsProps = {
    product: ProductDetail;
};

type TabType = "detail" | "spec" | "review" | "qna";

function ProductTabs({ product }: ProductTabsProps) {
    const [activeTab, setActiveTab] = useState<TabType>("detail");

    const tabs = [
        { id: "detail", label: "상세 정보" },
        { id: "spec", label: "스펙" },
        { id: "review", label: "리뷰" },
        { id: "qna", label: "Q&A" },
    ] as const;

    return (
        <section className="mt-6 rounded-2xl border bg-white shadow-sm">
            <div className="grid grid-cols-4 border-b text-center font-medium">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={
                            activeTab === tab.id
                                ? "border-r px-4 py-4 text-red-600"
                                : "border-r px-4 py-4 hover:bg-gray-50"
                        }
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="p-6">
                {activeTab === "detail" && (
                    <div>
                        <h2 className="mb-4 text-xl font-bold">상세 정보</h2>
                        <p className="text-gray-600">{product.description}</p>

                        <div className="mt-6 rounded-xl bg-gray-100 p-6 text-center text-gray-500">
                            상세 이미지 / 상품 설명 영역
                        </div>
                    </div>
                )}

                {activeTab === "spec" && (
                    <div>
                        <h2 className="mb-4 text-xl font-bold">스펙</h2>

                        <div className="overflow-hidden rounded-xl border">
                            <div className="grid grid-cols-[160px_1fr] border-b">
                                <div className="bg-gray-50 p-4 font-medium">카테고리</div>
                                <div className="p-4">{product.category}</div>
                            </div>

                            <div className="grid grid-cols-[160px_1fr] border-b">
                                <div className="bg-gray-50 p-4 font-medium">모델명</div>
                                <div className="p-4">{product.name}</div>
                            </div>

                            <div className="grid grid-cols-[160px_1fr] border-b">
                                <div className="bg-gray-50 p-4 font-medium">가격</div>
                                <div className="p-4">{product.price.toLocaleString()}원</div>
                            </div>

                            <div className="grid grid-cols-[160px_1fr]">
                                <div className="bg-gray-50 p-4 font-medium">색상</div>
                                <div className="p-4">블랙</div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "review" && (
                    <div>
                        <h2 className="mb-4 text-xl font-bold">리뷰</h2>

                        <div className="space-y-4">
                            <div className="rounded-xl border p-4">
                                <p className="mb-2 font-semibold">★★★★★</p>
                                <p className="text-gray-600">
                                    화질이 선명하고 디자인도 깔끔해서 만족합니다.
                                </p>
                            </div>

                            <div className="rounded-xl border p-4">
                                <p className="mb-2 font-semibold">★★★★☆</p>
                                <p className="text-gray-600">
                                    가격대는 있지만 성능은 확실히 좋습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "qna" && (
                    <div>
                        <h2 className="mb-4 text-xl font-bold">Q&A</h2>

                        <div className="space-y-4">
                            <div className="rounded-xl border p-4">
                                <p className="font-semibold">Q. 배송은 얼마나 걸리나요?</p>
                                <p className="mt-2 text-gray-600">
                                    A. 지역에 따라 다르지만 보통 2~5일 정도 소요됩니다.
                                </p>
                            </div>

                            <div className="rounded-xl border p-4">
                                <p className="font-semibold">Q. 설치 서비스가 포함되나요?</p>
                                <p className="mt-2 text-gray-600">
                                    A. 대형 가전은 기본 설치 서비스가 포함될 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProductTabs;