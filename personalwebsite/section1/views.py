# views.py in your Section 1 app
from django.shortcuts import render

def introduction(request):
    return render(request, 'section1/introduction.html')