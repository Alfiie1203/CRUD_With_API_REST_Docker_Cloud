import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaComponent } from './components/venta/venta.component';
import { ListarComponent } from './components/listar/listar.component';

const routes: Routes = [
  {path: 'nuevaventa', component: VentaComponent},
  
  {path: 'listar', component: ListarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
