# section1/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.introduction, name='introduction'),
    # Other URL patterns for additional sections
]
