from django.contrib import admin
from django.urls import path
from . import views

app_name = "accounts"

urlpatterns = [
    path('', views.loginpage, name="loginpage"),
    path('account/', views.accountpage, name="accountpage"),
    # 민혁 수정
    path('logout/', views.logout_view, name="logout"),
]