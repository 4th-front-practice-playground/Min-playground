from django.shortcuts import render

# Create your views here.
def products_page(request):
    return render(
        request,
        "products/products.html"
    )

def searchpage(request):
    return products_page(request)

def productpage(request):
    return products_page(request)
