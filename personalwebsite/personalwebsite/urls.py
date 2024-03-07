# personalwebsite/urls.py

from django.contrib import admin
from django.urls import path, include
from section1 import views as section1_views

urlpatterns = [
    path('', include('section1.urls')),  # Include section1/urls.py for root URL
    path('admin/', admin.site.urls),
]
