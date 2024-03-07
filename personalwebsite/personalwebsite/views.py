# personalwebsite/views.py

from django.shortcuts import redirect

def redirect_to_introduction(request):
    return redirect('introduction/')