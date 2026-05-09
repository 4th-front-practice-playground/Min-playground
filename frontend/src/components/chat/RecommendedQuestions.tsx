type RecommendedQuestionsProps = {
    onSelectQuestion: (question: string) => void;
};

function RecommendedQuestions({ onSelectQuestion }: RecommendedQuestionsProps) {
    const recommendedQuestions = [
        "혼자 사는데 어떤 냉장고가 좋아?",
        "20평대 에어컨 추천해줘",
        "TV랑 사운드바 같이 추천해줘",
        "예산 100만원 이하 세탁기 추천해줘",
    ];

    return (
        <div className="flex flex-1 items-center justify-center p-6">
            <div className="w-full max-w-2xl text-center">
                <h2 className="mb-2 text-2xl font-bold">무엇을 도와드릴까요?</h2>

                <p className="mb-6 text-gray-500">
                    원하는 가전 조건을 선택하거나 직접 입력해보세요.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                    {recommendedQuestions.map((question) => (
                        <button
                            key={question}
                            type="button"
                            onClick={() => onSelectQuestion(question)}
                            className="rounded-xl border bg-white p-4 text-left text-sm hover:bg-gray-50"
                        >
                            {question}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecommendedQuestions;