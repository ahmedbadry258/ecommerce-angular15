import { Component, OnInit } from '@angular/core';
import { ShopService } from './../shop.service';
import { Product } from './../../shared/models/Product';
import { APIData } from 'src/app/shared/models/APIData';
import { Page } from 'src/app/shared/models/Page';
import { map } from 'rxjs';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  products:Product[];
  page :Page
constructor(private shopService:ShopService){
this.products=[];
this.page={
  content: this.products,
    pageable: {
        sort: {
            empty: false,
            sorted: false,
            unsorted: false
        },
        offset: 0,
        pageSize: 0,
        pageNumber: 0,
        unpaged: false,
        paged: false
    },
    last: false,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number: 0,
    sort: {
        empty: false,
        sorted: false,
        unsorted: false
    },
    numberOfElements: 0,
    first: false,
    empty: false
}
}
  ngOnInit(): void {
this.findAllProducts();

  }

findAllProducts(){
  this.shopService.getProducts().subscribe(
    (data  :Product[]) =>{console.log(data),this.products=data},
    (error : any) =>console.log(error)
  )
}
}
