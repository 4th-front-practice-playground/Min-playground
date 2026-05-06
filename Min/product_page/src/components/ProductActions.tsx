export function ProductActions() {
  return (
    <div className="mt-auto flex flex-wrap gap-5 pt-8">
      <button
        className="border-4 border-neutral-200 bg-white px-3 py-2 text-3xl font-semibold text-neutral-950 transition hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand"
        type="button"
      >
        <span className="mr-1 text-brand">♥</span>
        찜하기
      </button>

      <button
        className="bg-brand px-6 py-3 text-3xl font-bold text-white transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        type="button"
      >
        구매하기
      </button>
    </div>
  );
}
