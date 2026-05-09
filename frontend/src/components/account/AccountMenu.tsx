function AccountMenu() {
    const menus = ["찜한 상품", "최근 본 상품", "추천 기록", "계정 설정"];

    return (
        <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">내 활동</h2>

            <div className="flex flex-col gap-3">
                {menus.map((menu) => (
                    <button
                        key={menu}
                        type="button"
                        className="w-full rounded-xl border p-4 text-left font-medium hover:bg-gray-50"
                    >
                        {menu}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default AccountMenu;