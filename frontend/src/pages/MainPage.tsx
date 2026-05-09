import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-7xl p-6">
        {/* 메인 배너 */}
        <section className="mb-10 flex h-64 items-center justify-center rounded-xl bg-gray-200">
          <h1 className="text-3xl font-bold">
            광고 / 메인 배너 영역
          </h1>
        </section>

        {/* LG봇 영역 */}
        <section className="mb-10 rounded-xl bg-gray-100 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-bold">
                LG봇에게 추천받기
              </h2>

              <p className="text-gray-600">
                원하는 가전을 자연어로 검색해보세요.
              </p>
            </div>

            <button className="rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
              onClick={() => navigate("/chat")}>
              LG봇 시작
            </button>
          </div>
        </section>

        {/* 카테고리 영역 */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">
            카테고리
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-xl bg-gray-100 p-6 text-center">
              TV
            </div>

            <div className="rounded-xl bg-gray-100 p-6 text-center">
              냉장고
            </div>

            <div className="rounded-xl bg-gray-100 p-6 text-center">
              에어컨
            </div>

            <div className="rounded-xl bg-gray-100 p-6 text-center">
              청소기
            </div>

            <div className="rounded-xl bg-gray-100 p-6 text-center">
              세탁기
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;