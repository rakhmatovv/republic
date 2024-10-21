from django.urls import path
from .views import *

app_name = "escorts"

urlpatterns = [
    path("", escort_list_view, name="escort_list_view"),
    path('escort/<int:escort_id>/', escort_detail, name='escort_detail'),
    path('whatnew/', what_news, name='news'),
]