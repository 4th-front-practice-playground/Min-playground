import { useState } from "react";
import Header from "../components/Header";
import ChatSidebar from "../components/chat/ChatSidebar";
import ChatHeader from "../components/chat/ChatHeader";
import RecommendedQuestions from "../components/chat/RecommendedQuestions";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

export type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

function ChatPage() {
  // 전체 채팅 메시지 상태
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // 모바일 사이드바 열림 상태
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 메시지 전송
  const handleSendMessage = async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);

    /*
      ==============================
      나중에 여기서 AI API 호출
      ==============================

      const response = await fetch(...)

      const assistantMessage = {
        ...
      }

      setMessages((prev) => [...prev, assistantMessage]);
    */
  };

  // 새 대화
  const handleNewChat = () => {
    setMessages([]);

    // 모바일에서 새 대화 누르면 사이드바 닫기
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 모바일 사이드바 오버레이 */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="h-full w-72 bg-white p-4 shadow-xl">
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
              >
                X
              </button>
            </div>

            <ChatSidebar onNewChat={handleNewChat} />
          </div>
        </div>
      )}

      <main className="mx-auto h-[calc(100vh-56px)] max-w-6xl p-4 md:grid md:grid-cols-[260px_1fr] md:gap-6 md:p-6">
        {/* 데스크톱 사이드바 */}
        <div className="hidden md:block">
          <ChatSidebar onNewChat={handleNewChat} />
        </div>

        {/* 오른쪽 채팅 영역 */}
        <section className="relative flex h-full min-h-0 flex-col rounded-2xl border bg-white shadow-sm">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="absolute left-0 top-1/2 z-10 flex h-16 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-r-lg border bg-white text-2xl shadow-sm hover:bg-gray-100 md:hidden"
          >
            ☰
          </button>

          {/* 채팅 상단 */}
          <ChatHeader />

          {/* 채팅 메시지 or 추천 질문 */}
          {messages.length === 0 ? (
            <RecommendedQuestions onSelectQuestion={handleSendMessage} />
          ) : (
            <ChatMessages messages={messages} />
          )}

          {/* 입력창 */}
          <ChatInput onSendMessage={handleSendMessage} />
        </section>
      </main>
    </div>
  );
}

export default ChatPage;