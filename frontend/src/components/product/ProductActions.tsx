function ProductActions() {
    return (
        <section className="mt-6 flex justify-end gap-3 rounded-2xl border bg-white p-5 shadow-sm">
            <button
                type="button"
                className="rounded-xl border px-6 py-3 font-semibold hover:bg-gray-50"
            >
                찜하기
            </button>

            <button
                type="button"
                className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
            >
                구매하기
            </button>
        </section>
    );
}

export default ProductActions;