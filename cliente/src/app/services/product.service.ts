import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url ='http://localhost:4000/productos/'
  constructor(private http: HttpClient) { }

  getAll(url: string){
    return this.http.get(url);
  }
  getProducts(): Observable<any>{
    return  this.http.get(this.url + 'getAll');
  }

  deleteOne(id:string): Observable<any>{
    return this.http.delete(this.url + id)
  }

  addProduct(product: Product): Observable<any>{
    return this.http.post(this.url + 'add',product)
  }
}
