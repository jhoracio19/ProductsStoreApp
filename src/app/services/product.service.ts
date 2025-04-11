import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cart: any[] = [];

  constructor() { }

  addToCart(product: any) {
    this.cart.push(product);
  }

  getCartProducts() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}
