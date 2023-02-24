import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listPodcuts:Product[] = []
  constructor( private _productService: ProductService,
                private toastr: ToastrService){
  }

  ngOnInit(): void {
    this.getProduct()
  }
  url ='http://localhost:4000/productos/'

  getProduct(){
    this._productService.getProducts().subscribe(data=>{
      this.listPodcuts = data;
    })
  }

  deleteOne(id:any){
    this._productService.deleteOne(id).subscribe(data=>{
      this.toastr.error('Producto elininado con exito','Producto eliminado')
      this.getProduct()
    },error => {
      console.log(error)
    })
  }

   
}
