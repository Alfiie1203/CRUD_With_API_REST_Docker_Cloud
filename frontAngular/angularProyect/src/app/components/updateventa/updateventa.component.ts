import { Component } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateventa',
  templateUrl: './updateventa.component.html',
  styleUrl: './updateventa.component.css'
})
export class UpdateventaComponent {
  
  ventaId: number = 0;
  ventaData: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private backendService: BackendService){}

  ngOnInit(): void {
    // Obtener el ID de la venta de la URL utilizando ActivatedRoute
    this.route.params.subscribe(params => {
      this.ventaId = +params['id'];
      // Lógica para obtener los datos de la venta que se actualizará
      this.backendService.getVenta(this.ventaId).subscribe(
        data => {
          this.ventaData = data;
        },
        error => {
          console.error('Error al obtener la venta para actualizar', error);
        }
      );
    });
  }

  updateVenta() {
    // Lógica para enviar la actualización al backend utilizando backendService.updateVenta
    this.backendService.updateVenta(this.ventaId, this.ventaData).subscribe(
      response => {
        console.log('Venta actualizada exitosamente', response);
        // Puedes redirigir a la lista de ventas u realizar otras acciones después de la actualización
        this.router.navigate(['/lista-ventas']);
      },
      error => {
        console.error('Error al actualizar la venta', error);
      }
    );
  }
}

