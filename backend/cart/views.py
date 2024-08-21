from django.shortcuts import render
import requests
import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class StockCheckerView(APIView):
    def post(self, request):
        byte_data = request.body
        cart = json.loads(byte_data.decode('utf-8'))
        url = 'https://dummyjson.com/products?limit=0'
        response = requests.get(url)
        is_valid = True
        if response.status_code == 200:
            data = response.json()
            all_products_info = data['products']
            cart_info = []
            for product in cart:
                product_info = all_products_info[int(product['productId']) - 1]
                st = product_info['stock']
                r = product_info['rating']
                sr = st // r
                id = product['productId']
                name = product_info['title']
                unit_price = product_info['price']
                quantity = product['quantity']
                product_info_req = {
                    'product_id': id,
                    'name': name,
                    'unit_price': unit_price,
                    'quantity': quantity,
                    'stock': st,
                    'rating': r,
                    'real_stock': sr
                }
                cart_info.append(product_info_req)
                if sr < quantity:
                    is_valid = False

            print("cart:", cart_info)
            return Response(is_valid, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Error al contactar la API externa'}, status=response.status_code)