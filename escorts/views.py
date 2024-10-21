from django.core.paginator import Paginator
from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from django.db.models import Q

def escort_list_view(request):
    escorts = Escort.objects.all().order_by("-is_premium")

    gender = request.GET.get("gender")
    city = request.GET.get("city")
    nationality = request.GET.get("nationality")
    ethnicity = request.GET.get("ethnicity")
    orientation = request.GET.get("orientation")

    if gender:
        escorts = escorts.filter(gender=gender)

    if city:
        escorts = escorts.filter(city__icontains=city)

    if nationality:
        escorts = escorts.filter(nationality_id=nationality)

    if ethnicity:
        escorts = escorts.filter(ethnicity=ethnicity)

    if orientation:
        escorts = escorts.filter(orientation=orientation)

    paginator = Paginator(escorts, 7)  # 7 записей на страницу
    page_number = request.GET.get('page')  # Получаем номер страницы из GET-запроса
    page_obj = paginator.get_page(page_number)

    all_photos = []
    for escort in page_obj.object_list:
        photos = [
            escort.photo1.url if escort.photo1 else None,
            escort.photo2.url if escort.photo2 else None,
            escort.photo3.url if escort.photo3 else None,
            escort.photo4.url if escort.photo4 else None,
            escort.photo5.url if escort.photo5 else None,
        ]
        all_photos.extend(filter(None, photos))  # Добавляем только непустые фотографии

    city_choices = Escort.objects.values_list("city", flat=True).distinct()
    nationality_choices = Nationality.objects.all()
    ethnicity_choices = Escort.ETHNICITY_CHOICES
    orientation_choices = Escort.ORIENTATION_CHOICES

    context = {
        "escorts": page_obj.object_list,
        "photos": all_photos,  
        "page_obj": page_obj,
        "gender": gender,
        "city_choices": city_choices,
        "nationality_choices": nationality_choices,
        "ethnicity_choices": ethnicity_choices,
        "orientation_choices": orientation_choices,
    }

    return render(request, "index.html", context)

def what_news(request):
    premium_escorts = Escort.objects.filter(is_premium=True)[:5]  
    return render(request, 'female-duba.html', {'escorts': premium_escorts})


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
