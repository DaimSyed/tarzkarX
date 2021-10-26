from django.contrib import admin
from .models import *

admin.site.register(ProductCategory)
admin.site.register(ProductColor)
admin.site.register(Product)
admin.site.register(Media)

