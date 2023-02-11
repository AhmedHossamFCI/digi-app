import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { ProductCardComponent, ProductListComponent } from "./components";
import { ProductsRoutingModule } from "./products.routing";
import { ProductService } from "./utils";

@NgModule({
  declarations: [ProductCardComponent
    , ProductListComponent],
  imports: [
    ProductsRoutingModule,
    SharedModule
  ],
  providers: [ProductService]
})
export class ProductsModule { }
