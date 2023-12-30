import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent {
  ventaData: any = {}; // Puedes usar un formulario para recopilar estos datos

  constructor(private backendService: BackendService) {}

  createVenta() {
    this.backendService.createVenta(this.ventaData).subscribe(
      response => {
        console.log('Venta creada exitosamente', response);
        // Puedes realizar otras acciones después de la creación exitosa
        window.location.reload();
      },
      error => {
        console.error('Error al crear la venta', error);
        // Puedes manejar el error de alguna manera
      }
    );
  }
}
