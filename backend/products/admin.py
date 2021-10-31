from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import *


class MediaInline(admin.TabularInline):
    model = Media
    readonly_fields = ["media_image"]

    def media_image(self, obj):
        return mark_safe('<img src="{url}" width="50px" height="50px" />'.format(
            url=obj.image.url
        )
        )


class ProductColorAdmin(admin.ModelAdmin):
    model = ProductColor
    readonly_fields = ["color_prev"]
    list_display = ['name', 'color', 'color_prev']

    def color_prev(self, obj):
        if obj.color:
            return mark_safe(
                '<div style="height: 30px;width: 30px;background: {hex};border: 1px solid black;"></div>'.format(
                    hex=obj.color))
        return ""


class CategoryAdmin(admin.ModelAdmin):
    model = Media
    readonly_fields = ["media_prev", "icon_prev"]
    list_display = ['name', 'media_prev', 'icon_prev']

    def media_prev(self, obj):
        if obj.image:
            return mark_safe('<img src="{url}" width="50px" height="50px" />'.format(url=obj.image.url))
        return ""

    def icon_prev(self, obj):
        if obj.icon:
            return mark_safe('<img src="{url}" width="50px" height="50px" />'.format(url=obj.icon.url))
        return ""


class ProductAdmin(admin.ModelAdmin):
    inlines = [MediaInline]
    model = Product
    list_display = ['sku', 'name', 'price', 'stock', 'featured']
    list_filter = ['category', 'featured']
    search_fields = ['sku', 'name']


admin.site.register(ProductCategory, CategoryAdmin)
admin.site.register(ProductColor, ProductColorAdmin)
admin.site.register(Product, ProductAdmin)
