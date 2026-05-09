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
  // 전체 채팅 메시지 상태 저장
  // 나중에 AI 응답까지 여기 배열에 추가됨
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // 사용자가 메시지 전송했을 때 실행
  const handleSendMessage = async (content: string) => {
    // 사용자 메시지 객체 생성
    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content,
    };

    // 기존 메시지 + 사용자 메시지 추가
    setMessages((prev) => [...prev, userMessage]);

    /*
      ==============================
      여기서 AI API 연동 시작
      ==============================

      예시 흐름:

      1. Django backend로 사용자 질문 전달
         POST /api/chat/

      2. backend에서 AI(OpenAI 등) 호출

      3. AI 응답 받아오기

      4. assistant 메시지 추가

      예시:

      const response = await fetch("http://localhost:8000/api/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
        }),
      });

      const data = await response.json();

      const assistantMessage: ChatMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);

    */
  };

  // 새 대화 버튼 클릭 시 채팅 초기화
  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto grid h-[calc(100vh-56px)] max-w-6xl grid-cols-[260px_1fr] gap-6 p-6">
        {/* 왼쪽 채팅 사이드바 */}
        <ChatSidebar onNewChat={handleNewChat} />

        {/* 오른쪽 채팅 메인 영역 */}
        <section className="flex min-h-0 flex-col rounded-2xl border bg-white shadow-sm">
          {/* 채팅 상단 제목 */}
          <ChatHeader />

          {/* 
            메시지가 없으면 추천 질문 화면 출력
            메시지가 있으면 실제 채팅 출력
          */}
          {messages.length === 0 ? (
            <RecommendedQuestions onSelectQuestion={handleSendMessage} />
          ) : (
            <ChatMessages messages={messages} />
          )}

          {/* 하단 입력창 */}
          <ChatInput onSendMessage={handleSendMessage} />
        </section>
      </main>
    </div>
  );
}

export default ChatPage;