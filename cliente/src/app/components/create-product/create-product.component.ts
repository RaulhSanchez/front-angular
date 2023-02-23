import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  constructor( private fb: FormBuilder){
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
    console.log( this.productForm)
  }
}
