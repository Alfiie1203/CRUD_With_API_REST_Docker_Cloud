import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  
  mostrarPopupFlag: boolean = false;
  ventas: any[] = [];

  ventas2 = [
    { producto: 'Producto A', cantidad: 10, precio: 50 },
    { producto: 'Producto B', cantidad: 5, precio: 30 },
    { producto: 'Producto C', cantidad: 8, precio: 20 }
  ];


  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.obtenerListaVentas();
  }

  // Función para mostrar el popup
  mostrarPopup() {
    this.mostrarPopupFlag = true;
  }

  // Función para cerrar el popup
  cerrarPopup() {
    this.mostrarPopupFlag = false;
  }

  obtenerListaVentas() {
    this.backendService.getVentas().subscribe(
      data => {
        this.ventas = this.transformarVentas(data);
      },
      error => {
        console.error('Error al obtener la lista de ventas', error);
      }
    );
  }

  // Transforma el array de arrays a un array de objetos con propiedades descriptivas
  transformarVentas(ventasArray: any[]): any[] {
    return ventasArray.map(venta => {
      return {
        id: venta[0],
        id_cliente: venta[1],
        id_producto: venta[2],
        id_vendedor: venta[3],
        cantidad: venta[4],
        fecha_venta: new Date(venta[5]) // Convierte la fecha a un objeto Date
      };
    });
  }

  eliminarVenta(idVenta: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta venta?')) {
      this.backendService.deleteVenta(idVenta).subscribe(
        response => {
          console.log('Venta eliminada exitosamente', response);
          // Actualiza la lista de ventas después de la eliminación
          this.obtenerListaVentas();
        },
        error => {
          console.error('Error al eliminar la venta', error);
        }
      );
    }
  }

}