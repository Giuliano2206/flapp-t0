from django.urls import path
from .views import StockCheckerView

urlpatterns = [
    path('cart/', StockCheckerView.as_view() ,name='cart-products'),
]