from django.shortcuts import render

# Create your views here.
def chatpage(request):
    return render(
        request,
        "chatpage.html",
        {
            "recent_chats": ["TV 추천 상담", "냉장고 비교", "에어컨 문의"],
            "recommended_questions": [
                "혼자 사는데 어떤 냉장고가 좋아?",
                "20평대 에어컨 추천해줘",
                "TV랑 사운드바 같이 추천해줘",
                "예산 100만원 이하 세탁기 추천해줘",
            ],
        },
    )