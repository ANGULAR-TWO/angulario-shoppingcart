import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  items = []
  constructor(private httpClient: HttpClient) { }
  addProductToCart(product: any) {
    this.items.push(product);
  }
  getItemsFromCart() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrice() {
   return  this.httpClient.get('/assets/shipping.json');
   
  }
}
