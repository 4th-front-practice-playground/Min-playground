import { NavButton } from "./NavButton";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <NavButton>Home</NavButton>

      <nav className="flex gap-4" aria-label="사용자 메뉴">
        <NavButton>로그인</NavButton>
        <NavButton>마이 페이지</NavButton>
      </nav>
    </header>
  );
}
