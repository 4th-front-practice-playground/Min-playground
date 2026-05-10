type ChatSidebarProps = {
    onNewChat: () => void;
};

function ChatSidebar({ onNewChat }: ChatSidebarProps) {
    const recentChats = ["TV 추천 상담", "냉장고 비교", "에어컨 문의"];

    return (
        <aside className="flex h-full flex-col rounded-2xl border bg-white p-5 shadow-sm">
            <button
                type="button"
                onClick={onNewChat}
                className="mb-6 w-full rounded-lg bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
            >
                새 대화
            </button>

            <section>
                <h2 className="mb-3 text-sm font-bold text-gray-500">최근 대화</h2>

                <div className="space-y-2 overflow-y-auto">
                    {recentChats.map((chat) => (
                        <button
                            key={chat}
                            type="button"
                            className="w-full rounded-lg border px-4 py-3 text-left text-sm hover:bg-gray-50"
                        >
                            {chat}
                        </button>
                    ))}
                </div>
            </section>
        </aside>
    );
}

export default ChatSidebar;