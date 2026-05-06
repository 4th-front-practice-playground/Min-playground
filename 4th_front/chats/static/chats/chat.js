const isLoggedIn = false;

function goToMyPage() {
    window.location.href = isLoggedIn ? "/accounts/mypage/" : "/accounts/login/";
}

function sendMessage(event) {
    event.preventDefault();

    const input = document.getElementById("messageInput");
    const message = input.value.trim();

    if (!message) {
        return;
    }

    appendUserMessage(message);
    addChatHistory(message);
    input.value = "";

    setTimeout(() => {
        appendAiMessage("현재는 목업 응답입니다. Django AI API 연결 후 실제 답변으로 교체됩니다.");
    }, 300);
}

function appendUserMessage(message) {
    appendMessage("user", message);
}

function appendAiMessage(message) {
    appendMessage("ai", message);
}

function appendMessage(sender, message) {
    const messageList = document.getElementById("messageList");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender === "user" ? "user-message" : "ai-message"}`;
    messageElement.innerHTML = `
        <strong>${sender}</strong>
        <p>${escapeHtml(message)}</p>
    `;

    messageList.appendChild(messageElement);
    messageList.scrollTop = messageList.scrollHeight;
}

function addChatHistory(message) {
    const historyList = document.getElementById("historyList");
    const historyItem = document.createElement("li");
    historyItem.textContent = message.length > 18 ? `${message.slice(0, 18)}...` : message;
    historyList.prepend(historyItem);
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
