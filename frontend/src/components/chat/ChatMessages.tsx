import type { ChatMessage } from "../../pages/ChatPage";

type ChatMessagesProps = {
    messages: ChatMessage[];
};

function ChatMessages({ messages }: ChatMessagesProps) {
    return (
        <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={
                        message.role === "user"
                            ? "ml-auto max-w-[70%] rounded-2xl bg-red-600 px-5 py-4 text-white"
                            : "max-w-[70%] rounded-2xl bg-gray-100 px-5 py-4"
                    }
                >
                    {message.content}
                </div>
            ))}
        </div>
    );
}

export default ChatMessages;