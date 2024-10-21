from django.db import models
from decimal import Decimal
from django.conf import settings

class Language(models.Model):
    language = models.CharField(max_length=100)
    level = models.CharField(max_length=100)

    def __str__(self):
        return self.language

class Nationality(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Escort(models.Model):
    MALE = 'Male'
    FEMALE = 'Female'
    GENDER_CHOICES = [
        (MALE, 'Male'),
        (FEMALE, 'Female'),
    ]

    STRAIGHT = 'Straight'
    GAY = 'Gay'
    BISEXUAL = 'Bisexual'
    ORIENTATION_CHOICES = [
        (STRAIGHT, 'Straight'),
        (GAY, 'Gay'),
        (BISEXUAL, 'Bisexual'),
    ]

    ASIAN = 'Asian'
    BLACK = 'Black'
    CAUCASIAN = 'Caucasian'
    ETHNICITY_CHOICES = [
        (ASIAN, 'Asian'),
        (BLACK, 'Black'),
        (CAUCASIAN, 'Caucasian'),
    ]

    SMALL = 'Small'
    MEDIUM = 'Medium'
    LARGE = 'Large'
    BUST_SIZE_CHOICES = [
        (SMALL, 'Small'),
        (MEDIUM, 'Medium'),
        (LARGE, 'Large'),
    ]

    BLACK_HAIR = 'Black'
    BROWN_HAIR = 'Brown'
    BLONDE_HAIR = 'Blonde'
    HAIR_COLOR_CHOICES = [
        (BLACK_HAIR, 'Black'),
        (BROWN_HAIR, 'Brown'),
        (BLONDE_HAIR, 'Blonde'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField()
    photo1 = models.ImageField(upload_to="photos/")
    photo2 = models.ImageField(upload_to="photos/")
    photo3 = models.ImageField(upload_to="photos/")
    photo4 = models.ImageField(upload_to="photos/")
    photo5 = models.ImageField(upload_to="photos/")
    languages = models.ManyToManyField(Language, related_name="escorts")
    orientation = models.CharField(max_length=50, choices=ORIENTATION_CHOICES)
    ethnicity = models.CharField(max_length=50, choices=ETHNICITY_CHOICES)
    age = models.PositiveIntegerField()
    smokes = models.BooleanField()
    nationality = models.ForeignKey(Nationality, on_delete=models.CASCADE)
    city = models.CharField(max_length=100)
    height_cm = models.PositiveIntegerField()
    bust_size = models.CharField(max_length=10, choices=BUST_SIZE_CHOICES, default=MEDIUM)
    shaved = models.BooleanField()
    hair_color = models.CharField(max_length=50, choices=HAIR_COLOR_CHOICES)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    incalls_cost = models.DecimalField(max_digits=10, decimal_places=2)
    outcalls_cost = models.DecimalField(max_digits=10, decimal_places=2)
    is_premium = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def get_incalls_cost_in_aed(self):
        usd_to_aed = Decimal(settings.USD_TO_AED)
        return self.incalls_cost * usd_to_aed

    def get_outcalls_cost_in_aed(self):
        usd_to_aed = Decimal(settings.USD_TO_AED)
        return self.outcalls_cost * usd_to_aed
