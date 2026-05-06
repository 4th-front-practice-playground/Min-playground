from django.contrib import admin
from django.urls import path
from . import views

app_name = "accounts"

urlpatterns = [
    path('', views.loginpage, name="loginpage"),
    path('login/', views.loginpage, name="login"),
    path('mypage/', views.mypage, name="mypage"),
    path('account/', views.accountpage, name="accountpage")
]
