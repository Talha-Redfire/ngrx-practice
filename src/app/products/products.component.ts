import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductsAction } from 'src/Store/product.actions';
import { ProductsApiService } from '../services/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private store: Store, private getProducts: ProductsApiService) {}
  getAllproducts() {
    this.store.dispatch(getProductsAction());
  }
  ngOnInit(): void {
    this.getAllproducts();
  }
}
