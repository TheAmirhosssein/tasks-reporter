from django.urls import path

from task import views

urlpatterns = [
    path("", views.HomePage.as_view(), name="home_page")
]
