type AuthMode = "login" | "signup" | "findId" | "resetPassword";

type LoginFormProps = {
    setMode: (mode: AuthMode) => void;
};

function LoginForm({ setMode }: LoginFormProps) {
    return (
        <>
            <h1 className="mb-2 text-center text-3xl font-bold">로그인</h1>

            <p className="mb-8 text-center text-sm text-gray-500">
                LG 가전 추천 서비스를 이용하려면 로그인해주세요.
            </p>

            <form className="space-y-4">
                <div>
                    <label className="mb-2 block text-sm font-medium">아이디</label>
                    <input
                        type="text"
                        placeholder="아이디를 입력하세요"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:border-red-500"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">비밀번호</label>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        className="w-full rounded-lg border px-4 py-3 outline-none focus:border-red-500"
                    />
                </div>

                <button
                    type="button"
                    className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
                >
                    로그인
                </button>
            </form>

            <div className="mt-6 flex justify-center gap-4 text-sm text-gray-500">
                <button type="button" onClick={() => setMode("findId")}>
                    아이디 찾기
                </button>
                <button type="button" onClick={() => setMode("resetPassword")}>
                    비밀번호 찾기
                </button>
                <button type="button" onClick={() => setMode("signup")}>
                    회원가입
                </button>
            </div>
        </>
    );
}

export default LoginForm;