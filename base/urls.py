from django.urls import  path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('mtt', views.mtt, name="mtt"),
    path('sponsor', views.sponsor, name="sponsor"),
    path('aboutus', views.aboutus, name="aboutus"),
    path('contactus', views.contactus, name="contactus"),
    path('car', views.car, name="car"),
    path('traces', views.traces, name="traces"),
    path('car_global', views.car_global, name="car_global"),
    path('plane', views.plane, name="plane"),

]