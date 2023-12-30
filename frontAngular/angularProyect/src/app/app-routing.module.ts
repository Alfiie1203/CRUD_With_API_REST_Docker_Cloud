import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaComponent } from './components/venta/venta.component';

const routes: Routes = [
  {path: '', component: VentaComponent},
  {path: 'nuevaventa', component: VentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
