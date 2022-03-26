from django.urls import  path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('mtt', views.mtt, name="mtt"),
    path('sponsor', views.sponsor, name="sponsor"),
    path('aboutus', views.aboutus, name="aboutus"),
    path('contactus', views.contactus, name="contactus"),
    path('car', views.car, name="car"),

]