from django.contrib import admin
from django.urls import path
from . import views

app_name = "products"

urlpatterns = [
    path('', views.products_page, name="products_page"),
    path('product/', views.productpage, name="productpage")
]
