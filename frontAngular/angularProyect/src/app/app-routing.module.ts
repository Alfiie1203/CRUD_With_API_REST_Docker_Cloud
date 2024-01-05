import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaComponent } from './components/venta/venta.component';
import { ListarComponent } from './components/listar/listar.component';
import { UpdateventaComponent } from './components/updateventa/updateventa.component';

const routes: Routes = [
  {path: '', component: VentaComponent},
  {path: 'nuevaventa', component: VentaComponent},
  {path: 'actualizar', component: UpdateventaComponent},
  
  {path: 'listar', component: ListarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
