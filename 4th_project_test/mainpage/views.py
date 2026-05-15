from django.shortcuts import render

# Create your views here.
def mainpage(request):
    categories = ["TV", "냉장고", "에어컨", "청소기", "세탁기"]
    return render(
        request,
        "mainpage.html",
        {"categories": categories},
    )