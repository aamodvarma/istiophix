from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(request):
    return render(request, 'base/home.html')

def mtt(request):
    return render(request, 'base/mtt.html')


def sponsor(request):
    return render(request, 'base/sponsor.html')


def aboutus(request):
    return render(request, 'base/aboutus.html')
def contactus(request):
    return render(request, 'base/contactus.html')
def car(request):
    return render(request, 'base/car.html')