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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;