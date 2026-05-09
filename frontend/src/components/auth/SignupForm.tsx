type AuthMode = "login" | "signup" | "findId" | "resetPassword";

type SignupFormProps = {
    setMode: (mode: AuthMode) => void;
};

function SignupForm({ setMode }: SignupFormProps) {
    return (
        <>
            <h1 className="mb-6 text-center text-3xl font-bold">회원가입</h1>

            <form className="space-y-4">
                <input className="w-full rounded-lg border px-4 py-3" placeholder="아이디" />
                <input className="w-full rounded-lg border px-4 py-3" placeholder="이메일" />
                <input className="w-full rounded-lg border px-4 py-3" type="password" placeholder="비밀번호" />
                <input className="w-full rounded-lg border px-4 py-3" type="password" placeholder="비밀번호 확인" />

                <button className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white">
                    회원가입
                </button>
            </form>

            <button
                type="button"
                onClick={() => setMode("login")}
                className="mt-6 w-full text-sm text-gray-500"
            >
                로그인으로 돌아가기
            </button>
        </>
    );
}

export default SignupForm;