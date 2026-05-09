import { useState } from "react";

type ChatInputProps = {
    onSendMessage: (message: string) => void;
};

function ChatInput({ onSendMessage }: ChatInputProps) {
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!message.trim()) return;

        onSendMessage(message);
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-3 border-t p-5">
            <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="메시지를 입력하세요."
                className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-red-500"
            />

            <button
                type="submit"
                className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
            >
                전송
            </button>
        </form>
    );
}

export default ChatInput;