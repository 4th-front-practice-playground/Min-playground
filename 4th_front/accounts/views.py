from django.shortcuts import render

# Create your views here.
def mypage(request):
    return render(
        request,
        "accounts/mypage.html"
    )

def loginpage(request):
    return render(
        request,
        "accounts/login.html"
    )

def accountpage(request):
    return mypage(request)
