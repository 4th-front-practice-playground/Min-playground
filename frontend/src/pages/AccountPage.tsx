import Header from "../components/Header";
import AccountProfile from "../components/account/AccountProfile";
import AccountMenu from "../components/account/AccountMenu";
import RecentProducts from "../components/account/RecentProducts";

function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="mb-8 text-3xl font-bold">마이페이지</h1>

        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <AccountMenu />

          <div className="space-y-6">
            <AccountProfile />
            <RecentProducts />
          </div>
        </div>
      </main>
    </div>
  );
}

export default AccountPage;