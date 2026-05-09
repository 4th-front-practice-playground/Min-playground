import { useState } from "react";
import Header from "../components/Header";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";
import FindIdForm from "../components/auth/FindIdForm";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";

type AuthMode = "login" | "signup" | "findId" | "resetPassword";

function LoginPage() {
  const [mode, setMode] = useState<AuthMode>("login");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex min-h-[calc(100vh-56px)] items-center justify-center px-6">
        <section className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
          {mode === "login" && <LoginForm setMode={setMode} />}
          {mode === "signup" && <SignupForm setMode={setMode} />}
          {mode === "findId" && <FindIdForm setMode={setMode} />}
          {mode === "resetPassword" && <ResetPasswordForm setMode={setMode} />}
        </section>
      </main>
    </div>
  );
}

export default LoginPage;