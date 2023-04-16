import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { Observable } from 'rxjs';
import { APIData } from '../shared/models/APIData';
import { Page } from '../shared/models/Page';
import { Brand } from '../shared/models/Brand';
import { Type } from '../shared/models/Type';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }
  private  baseUrl :string="http://localhost:8080/";
getProductsPagination(): Observable<APIData<Page>>{
  return this.http.get<APIData<Page>>(`${this.baseUrl}products`)
}
getProducts(): Observable<Product[]>{
  return this.http.get<Product[]>(`${this.baseUrl}allProducts`)
}

getBrands(): Observable<Brand[]>{
  return this.http.get<Brand[]>(`${this.baseUrl}brands`)
}
getTypes(): Observable<Type[]>{
  return this.http.get<Type[]>(`${this.baseUrl}types`)
}

findProductById(){

}
test(){

}
findTypeById(){

}

}
