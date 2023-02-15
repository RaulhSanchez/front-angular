import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
  {path:'',component: ProductListComponent},
  {path:'create-product',component: CreateProductComponent},
  {path:'edit-product/:id', component: CreateProductComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}// añadir siempre al final para redirigir de forma automatica si la ruta se escinbe mal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
