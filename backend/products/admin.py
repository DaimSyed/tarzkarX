from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import *

class MediaInline(admin.TabularInline):
    model = Media
    readonly_fields = ["image_image"]

    def image_image(self, obj):
        return mark_safe('<img src="{url}" width="50px" height="50px" />'.format(
            url=obj.image.url
        )
    )


class ProductAdmin(admin.ModelAdmin):
    inlines = [MediaInline]
    model = Product
    list_display = ['sku','name','price','stock','featured']
    list_filter = ['category','featured']
    search_fields = ['sku','name']

admin.site.register(ProductCategory)
admin.site.register(ProductColor)
admin.site.register(Product,ProductAdmin)

