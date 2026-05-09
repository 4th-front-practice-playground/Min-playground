import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex h-14 items-center justify-between border-b px-6">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="text-sm font-medium"
      >
        Home
      </button>

        <div className="flex gap-2">
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="rounded bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200"
        >
          로그인
        </button>

        <button
          type="button"
          onClick={() => navigate("/account")}
          className="rounded bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200"
        >
          마이페이지
        </button>
      </div>
    </header>
  );
}

export default Header;