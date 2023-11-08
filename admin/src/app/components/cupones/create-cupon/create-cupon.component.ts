import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CuponService } from 'src/app/services/cupon.service';

declare var iziToast: any;

@Component({
  selector: 'app-create-cupon',
  templateUrl: './create-cupon.component.html',
  styleUrls: ['./create-cupon.component.css']
})
export class CreateCuponComponent implements OnInit {

  public token;

  public cupon : any = {
    tipo: ''
  };
  public load_btn = false;

  constructor(
    private _cuponService : CuponService,
    private _router : Router
  ){
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    
  }

  registro(registroForm: NgForm){
    if(registroForm.valid){
      this.load_btn = true;
      this._cuponService.registro_cupon_admin(this.cupon,this.token).subscribe(
        response=>{
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se registro correctamente el nuevo cupón.',
          });
          this.load_btn = false;

          this._router.navigate(['/panel/cupones']);
          
        },
        error=>{
          console.log(error);
          this.load_btn = false;
          
        }
      );

    }else{
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son válidos',
      });
    }
  }

}
