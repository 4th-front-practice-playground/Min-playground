import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type NavButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function NavButton({ children, className = "", ...props }: NavButtonProps) {
  return (
    <button
      className={`min-w-36 bg-neutral-200 px-7 py-2 text-center text-lg font-medium text-neutral-950 transition hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
