import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    { id: 1, name: 'Producto 1', description: 'Descripción corta del Producto 1' },
    { id: 2, name: 'Producto 2', description: 'Descripción corta del Producto 2' },
    { id: 3, name: 'Producto 3', description: 'Descripción corta del Producto 3' },
  ];

  constructor() { }

  ngOnInit(): void { }

}
