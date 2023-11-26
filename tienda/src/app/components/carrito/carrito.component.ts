import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public idcliente;
  public token;

  public carrito_arr : Array<any> = [];
  public url;
  public subtotal = 0;
  public total_pagar = 0;

  constructor(
    private _clienteService: ClienteService
  ){

    this.idcliente = localStorage.getItem('_id');
    this.token = localStorage.getItem('token');
    this.url = GLOBAL.url;

    this._clienteService.obtener_carrito_cliente(this.idcliente,this.token).subscribe(
      response=>{
        this.carrito_arr = response.data;
        this.calcular_carrito();
      }
    );
  }

  ngOnInit(): void {
    
  }

  calcular_carrito(){
    this.carrito_arr.forEach(element => {
      this.subtotal = this.subtotal + parseInt(element.producto.precio);
    });
    this.total_pagar = this.subtotal;
  }

}
