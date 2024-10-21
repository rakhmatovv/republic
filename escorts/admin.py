from django.contrib import admin
from .models import Language, Nationality, Escort

class LanguageAdmin(admin.ModelAdmin):
    list_display = ('language', 'level')

class NationalityAdmin(admin.ModelAdmin):
    list_display = ('name',)

class EscortAdmin(admin.ModelAdmin):
    list_display = (
        'name', 'city', 'age', 'gender', 'incalls_cost', 'outcalls_cost', 'is_premium'
    )
    search_fields = ('name', 'city')

admin.site.register(Language, LanguageAdmin)
admin.site.register(Nationality, NationalityAdmin)
admin.site.register(Escort, EscortAdmin)
