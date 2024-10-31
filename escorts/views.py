from django.core.paginator import Paginator
from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from django.db.models import Q



def escort_list_view(request):
    # Получаем список эскортов с сортировкой по премиум статусу
    escorts = Escort.objects.all().order_by("-is_premium")

    # Получаем значения фильтров из GET-запроса
    gender = request.GET.get("gender")
    city = request.GET.get("city")
    nationality = request.GET.get("nationality")
    language = request.GET.get("language")  # ID языка из запроса
    orientation = request.GET.get("orientation")

    # Фильтрация по заданным критериям
    if gender:
        escorts = escorts.filter(gender=gender)

    if city:
        escorts = escorts.filter(city__icontains=city)

    if nationality:
        escorts = escorts.filter(nationality_id=nationality)

    if language:
        escorts = escorts.filter(languages__id=language)  # Используем `languages__id` для фильтрации

    if orientation:
        escorts = escorts.filter(orientation=orientation)

    # Получаем фотографии для отображения
    all_photos = []
    for escort in escorts:
        photos = [
            escort.photo1.url if escort.photo1 else None,
            escort.photo2.url if escort.photo2 else None,
            escort.photo3.url if escort.photo3 else None,
            escort.photo4.url if escort.photo4 else None,
            escort.photo5.url if escort.photo5 else None,
        ]
        all_photos.extend(filter(None, photos))  # Добавляем только непустые фотографии

    # Получаем списки вариантов для фильтров
    city_choices = Escort.objects.values_list("city", flat=True).distinct()
    nationality_choices = Nationality.objects.all()
    language_choices = Language.objects.all()  # Получаем все языки
    orientation_choices = Escort.ORIENTATION_CHOICES

    # Передаем данные в контекст
    context = {
        "escorts": escorts,
        "photos": all_photos,
        "gender": gender,
        "city_choices": city_choices,
        "nationality_choices": nationality_choices,
        "language_choices": language_choices,
        "orientation_choices": orientation_choices,
    }

    return render(request, "index.html", context)

def what_news(request):
    premium_escorts = Escort.objects.filter(is_premium=True)[:5]
    return render(request, "female-duba.html", {"escorts": premium_escorts})


def escort_detail(request, escort_id):
    escort = get_object_or_404(Escort, id=escort_id)
    photos = [escort.photo1, escort.photo2, escort.photo3, escort.photo4, escort.photo5]
    languages = Language.objects.all()
    return render(
        request,
        "post_detail.html",
        {
            "escort": escort,
            "photos": photos,
            "languages": languages,
        },
    )
