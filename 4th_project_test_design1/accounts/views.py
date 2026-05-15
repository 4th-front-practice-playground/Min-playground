from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect

# Create your views here.
def accountpage(request):
    if not request.user.is_authenticated:
        return redirect("accounts:loginpage")

    return render(
        request,
        "accountpage.html",
        {
            "username": request.user.username,
            "nickname": request.user.nickname,
            "email": request.user.email,
            "account_menus": ["찜한 상품", "최근 본 상품", "추천 기록", "계정 설정"],
            "recent_products": ["LG OLED TV", "디오스 냉장고", "휘센 에어컨"],
        },
    )

def loginpage(request):
    # 민혁 수정
    if request.user.is_authenticated:
        return redirect("mainpage:mainpage")

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(
            request,
            username=username,
            password=password
        )

        if user is not None:
            login(request, user)
            request.session.pop("login_fail", None)
            return redirect("mainpage:mainpage")

        request.session["login_fail"] = True
        return redirect("accounts:loginpage")

    login_fail = request.session.pop("login_fail", False)

    return render(
        request,
        "loginpage.html",
        {
            "login_fail": login_fail
        }
    )

# 민혁 수정
def logout_view(request):
    if request.method == "POST":
        logout(request)
        return redirect("mainpage:mainpage")
    return redirect("mainpage:mainpage")