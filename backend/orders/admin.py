from django.contrib import admin
from .models import *

class OrderItemInline(admin.TabularInline):
    model = OrderItem

class OrderItemAdmin(admin.ModelAdmin):
    model = OrderItem
    list_display = ['product', 'color','quantity','total_cost']

class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderItemInline]
    model = Order
    list_display = ['id','firstname','lastname','city','status','total_price','created']
    list_filter = ['status','city']
    search_fields = ['firstname', 'lastname','city']

admin.site.register(Order,OrderAdmin)
