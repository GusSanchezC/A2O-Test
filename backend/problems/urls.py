from django.urls import path

from . import views

urlpatterns = [
    path("problem1", views.problem1.as_view(), name="problem1"),
    path("problem2", views.problem2.as_view(), name="problem2"),
]