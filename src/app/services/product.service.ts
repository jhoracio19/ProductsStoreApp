import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cart: any[] = [];

  constructor() { }

  // Agregar producto al carrito
  addToCart(product: any) {
    this.cart.push(product);
  }

  // Obtener productos del carrito
  getCartProducts() {
    return this.cart;
  }

  // Limpiar el carrito (opcional)
  clearCart() {
    this.cart = [];
  }
}
