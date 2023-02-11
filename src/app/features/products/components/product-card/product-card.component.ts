import { Component, Input, OnInit } from '@angular/core';

import { environment } from '@app/env';
import { HttpClient } from '@angular/common/http';
import { ProductModel, ProductService } from '../../utils';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})

export class ProductCardComponent implements OnInit {

  constructor(private service: ProductService) {
  }

  //#region props
  @Input() productItem: ProductModel;
  //#endregion

  //#region events
  ngOnInit() {
  }

  //#endregion

  //#region functions

  //#endregion
}
