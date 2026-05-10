function SearchFilter() {
    return (
        <aside className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-xl font-bold">필터</h2>

            <section className="mb-6">
                <h3 className="mb-3 font-semibold">가격대</h3>

                <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        100만원 이하
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        100만원 ~ 200만원
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        200만원 이상
                    </label>
                </div>
            </section>

            <section className="mb-6">
                <h3 className="mb-3 font-semibold">추천 기준</h3>

                <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        인기순
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        가격 낮은순
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        리뷰 많은순
                    </label>
                </div>
            </section>

            <button
                type="button"
                className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
            >
                필터 적용
            </button>
        </aside>
    );
}

export default SearchFilter;