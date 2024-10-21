from django import forms
from .models import Escort


class SearchForm(forms.Form):
    gender = forms.ChoiceField(choices=Escort.GENDER_CHOICES, required=False)
    city = forms.CharField(required=False)
    price_currency = forms.ChoiceField(
        choices=[("USD", "USD"), ("AED", "AED")], required=False
    )
    price_amount = forms.DecimalField(max_digits=10, decimal_places=2, required=False)

    # Use BooleanField for checkboxes, not CheckboxInput
    services_include_all = forms.BooleanField(required=False)

    cup_size_id_eq = forms.ChoiceField(
        choices=[(1, "Small"), (2, "Medium"), (3, "Large")], required=False
    )
    sexual_orientation_id_eq = forms.ChoiceField(
        choices=[(1, "Straight"), (2, "Gay"), (3, "Bisexual")], required=False
    )
    incalls_true = forms.BooleanField(required=False)
    outcalls_true = forms.BooleanField(required=False)
    smokes_false = forms.BooleanField(required=False)

    ethnicity_id_eq = forms.ChoiceField(
        choices=[(1, "Asian"), (2, "Black"), (3, "Caucasian")], required=False
    )
    nationality_id_eq = forms.ChoiceField(
        choices=[
            (1, "American"),
            (2, "British"),
            (3, "French"),
            (4, "Belarusian"),
            (5, "Russian"),
            (6, "Thailand"),
        ],
        required=False,
    )
    age_gteq = forms.ChoiceField(
        choices=[
            (1, 18),
            (2, 19),
            (3, 20),
            (4, 25),
            (5, 30),
            (6, 35),
            (7, 40),
            (8, 45),
            (9, 50),
        ],
        required=False,
    )
    age_lteq = forms.ChoiceField(
        choices=[
            (1, 18),
            (2, 19),
            (3, 20),
            (4, 25),
            (5, 30),
            (6, 35),
            (7, 40),
            (8, 45),
            (9, 50),
        ],
        required=False,
    )
    height_cm_gteq = forms.ChoiceField(
        choices=[(1, 160), (2, 165), (3, 170), (4, 175), (5, 180), (6, 190), (7, 200)]
    )
    height_cm_lteq = forms.ChoiceField(
        choices=[(1, 160), (2, 165), (3, 170), (4, 175), (5, 180), (6, 190), (7, 200)]
    )
    name_cont = forms.CharField(required=False)
    listing_languages_language_id_in = forms.ChoiceField(
        choices=[(1, "English"), (2, "Spanish"), (3, "French")], required=False
    )
    genitals_shaved_type_id_eq = forms.ChoiceField(
        choices=[(1, "Yes"), (2, "No")], required=False
    )
    hair_color_id_eq = forms.ChoiceField(
        choices=[(1, "Black"), (2, "Brown"), (3, "Blonde")], required=False
    )
