import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId!: number;
  product: any;

  products = [
    { id: 1, name: 'Producto 1', description: 'Descripción detallada del Producto 1' },
    { id: 2, name: 'Producto 2', description: 'Descripción detallada del Producto 2' },
    { id: 3, name: 'Producto 3', description: 'Descripción detallada del Producto 3' },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params['id'];
    this.product = this.products.find(p => p.id === this.productId);
  }

}
