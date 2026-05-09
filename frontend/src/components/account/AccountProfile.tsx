function AccountProfile() {
    return (
        <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-red-100 text-2xl font-bold text-red-600">
                    U
                </div>

                <div>
                    <h2 className="text-xl font-bold">사용자님</h2>
                    <p className="mt-1 text-sm text-gray-500">user@email.com</p>
                </div>
            </div>

            <button
                type="button"
                className="mt-6 w-full rounded-lg border px-4 py-2 text-sm hover:bg-gray-50"
            >
                프로필 수정
            </button>
        </section>
    );
}

export default AccountProfile;