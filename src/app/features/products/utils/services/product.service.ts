import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "@app/env";
import { catchError, Observable } from "rxjs";
import { HttpErrorHandler } from "@app/shared";
import { ProductModel } from "../models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = `${environment.apiUrl}`;

  constructor(private http: HttpClient, private eh: HttpErrorHandler) { }

  getProductList(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.url}/products`)
      .pipe(catchError(this.eh.handleError));
  }

  getCatogories(): Observable<string[]> {
    return this.http.get<ProductModel[]>(`${this.url}/products/categories`)
      .pipe(catchError(this.eh.handleError));
  }

  getProductById(id: number) {
    return this.http.get<ProductModel>(`${this.url}/products/${id}`)
      .pipe(catchError(this.eh.handleError));
  }
}
