import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId!: number;
  product: any;
  products = [
    { id: 1, name: 'AirPods Pro 2', description: 'Audífonos inalámbricos que ofrecen cancelación activa de ruido adaptativa, audio espacial personalizado y una mayor duración de batería. Diseñados para brindar comodidad durante largas horas de uso.' },
    { id: 2, name: 'MacBook Air con chip M3', description: 'Laptop ultraligera que combina potencia y eficiencia energética gracias al chip Apple M3. Cuenta con una pantalla Liquid Retina de alta resolución, batería de larga duración y rendimiento excepcional para tareas cotidianas y profesionales.' },
    { id: 3, name: 'iPhone 16 Pro', description: 'Smartphone de gama alta con diseño elegante, pantalla OLED ProMotion de 120 Hz, potente procesador A18 Pro y sistema avanzado de cámaras con capacidad para fotos y videos profesionales, especialmente pensado para creadores de contenido.' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params['id'];
    this.product = this.products.find(p => p.id === this.productId);
  }

  addToCart(): void {
    this.productService.addToCart(this.product);
    this.router.navigate(['/cart']);
  }

}
