import { Product } from "./Product"

export interface Page{
  content: Product[],
    pageable: {
        sort: {
            empty: boolean,
            sorted: boolean,
            unsorted: boolean
        },
        offset: number,
        pageSize: number,
        pageNumber: number,
        unpaged: boolean,
        paged: boolean
    },
    last: boolean,
    totalPages: number,
    totalElements: number,
    size: number,
    number: number,
    sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
    },
    numberOfElements: number,
    first: boolean,
    empty: boolean
}
/*
content:[]
empty:false
first:true
last:false
number:0
numberOfElements:10
pageable:{sort: {…}, pageSize: 10, pageNumber: 0, offset: 0, unpaged: false, …}
size:10
sort:{sorted: false, unsorted: true, empty: true}
totalElements:1000
totalPages:100
*/
