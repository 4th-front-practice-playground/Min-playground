function RecentProducts() {
    const products = ["LG OLED TV", "디오스 냉장고", "휘센 에어컨"];

    return (
        <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">최근 본 상품</h2>

            <div className="space-y-3">
                {products.map((product) => (
                    <div
                        key={product}
                        className="flex items-center justify-between rounded-xl border p-4"
                    >
                        <span className="font-medium">{product}</span>
                        <button type="button" className="text-sm text-red-600">
                            보기
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default RecentProducts;