import Header from "../components/Header";

function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto grid h-[calc(100vh-56px)] max-w-6xl grid-cols-[260px_1fr] gap-6 p-6">
        <aside className="rounded-2xl border bg-white p-5 shadow-sm">
          <button
            type="button"
            className="mb-6 w-full rounded-lg bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
          >
            새 대화
          </button>

          <section className="mb-8">
            <h2 className="mb-3 text-sm font-bold text-gray-500">최근 대화</h2>

            <div className="space-y-2">
              <button className="w-full rounded-lg border px-4 py-3 text-left text-sm hover:bg-gray-50">
                TV 추천 상담
              </button>
              <button className="w-full rounded-lg border px-4 py-3 text-left text-sm hover:bg-gray-50">
                냉장고 비교
              </button>
              <button className="w-full rounded-lg border px-4 py-3 text-left text-sm hover:bg-gray-50">
                에어컨 문의
              </button>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-bold text-gray-500">추천 질문</h2>

            <div className="space-y-2">
              <button className="w-full rounded-lg bg-gray-100 px-4 py-3 text-left text-sm hover:bg-gray-200">
                혼자 사는데 어떤 냉장고가 좋아?
              </button>
              <button className="w-full rounded-lg bg-gray-100 px-4 py-3 text-left text-sm hover:bg-gray-200">
                20평대 에어컨 추천해줘
              </button>
            </div>
          </section>
        </aside>

        <section className="flex min-h-0 flex-col rounded-2xl border bg-white shadow-sm">
          <div className="border-b p-5">
            <h1 className="text-2xl font-bold">LG 챗봇</h1>
            <p className="mt-1 text-sm text-gray-500">
              원하는 가전 조건을 입력하면 AI가 상품을 추천해줍니다.
            </p>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            <div className="max-w-[70%] rounded-2xl bg-gray-100 px-5 py-4">
              안녕하세요! 어떤 가전을 찾고 계신가요?
            </div>

            <div className="ml-auto max-w-[70%] rounded-2xl bg-red-600 px-5 py-4 text-white">
              1인 가구용 냉장고 추천해줘
            </div>

            <div className="max-w-[70%] rounded-2xl bg-gray-100 px-5 py-4">
              좋습니다. 용량, 예산, 설치 공간을 알려주시면 더 정확하게
              추천해드릴 수 있어요.
            </div>
          </div>

          <form className="flex gap-3 border-t p-5">
            <input
              type="text"
              placeholder="메시지를 입력하세요."
              className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-red-500"
            />

            <button
              type="button"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
            >
              전송
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default ChatPage;