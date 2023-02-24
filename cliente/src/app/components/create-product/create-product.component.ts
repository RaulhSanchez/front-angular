import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  constructor( private fb: FormBuilder,
                private router: Router,
                private toastr: ToastrService,
                private productService: ProductService){
    this.productForm = this.fb.group({
      name:['',Validators.required],
      category:['',Validators.required],
      localization:['',Validators.required],
      prize:['',Validators.required],
    })

  }
  ngOnInit():void {
  
  }
   add = async()=>{
    const PRODUCT: Product = {
      name: this.productForm.get('name')?.value,
      category: this.productForm.get('category')?.value,
      localization: this.productForm.get('localization')?.value,
      prize: this.productForm.get('prize')?.value
    }
    this.productService.addProduct(PRODUCT).subscribe(data =>{
      this.toastr.success('Producto añadido con exito')
      this.router.navigate(['/'])
    },error => {
      console.log(error)
      this.productForm.reset();
    })
  }
}
