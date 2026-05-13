import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import ChatPage from "./pages/ChatPage";
import SearchPage from "./pages/SearchPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/accounts/" element={<LoginPage />} />
        <Route path="/accounts/account/" element={<AccountPage />} />
        <Route path="/chats/" element={<ChatPage />} />
        <Route path="/products/" element={<SearchPage />} />
        <Route path="/products/:productCode/" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;