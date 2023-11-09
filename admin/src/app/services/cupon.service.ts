import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuponService {

  public url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  registro_cupon_admin(
    data: any,
    token: string | number | null
  ): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token !== null ? token.toString() : '',
    });
    return this._http.post(
      this.url + 'registro_cupon_admin',data,
      {
        headers: headers,
      }
    );
  }

  listar_cupones_admin(
    filtro: any,
    token: string | number | null
  ): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token !== null ? token.toString() : '',
    });
    return this._http.get(
      this.url + 'listar_cupones_admin/'+filtro,
      {
        headers: headers,
      }
    );
  }

  obtener_cupon_admin(
    id: any,
    token: string | number | null
  ): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token !== null ? token.toString() : '',
    });
    return this._http.get(
      this.url + 'obtener_cupon_admin/'+id,
      {
        headers: headers,
      }
    );
  }

  actualizar_cupon_admin(
    id: any,
    data: any,
    token: string | number | null
  ): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token !== null ? token.toString() : '',
    });
    return this._http.put(
      this.url + 'actualizar_cupon_admin/'+id,data,
      {
        headers: headers,
      }
    );
  }
}