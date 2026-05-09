type AuthMode = "login" | "signup" | "findId" | "resetPassword";

type ResetPasswordFormProps = {
    setMode: (mode: AuthMode) => void;
};

function ResetPasswordForm({ setMode }: ResetPasswordFormProps) {
    return (
        <>
            <h1 className="mb-6 text-center text-3xl font-bold">비밀번호 찾기</h1>

            <form className="space-y-4">
                <input className="w-full rounded-lg border px-4 py-3" placeholder="아이디" />
                <input className="w-full rounded-lg border px-4 py-3" placeholder="이메일" />

                <button className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white">
                    비밀번호 재설정
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

export default ResetPasswordForm;