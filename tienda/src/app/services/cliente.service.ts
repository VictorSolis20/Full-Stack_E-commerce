import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  login_cliente(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + 'login_cliente/',data,{headers: headers});
  }

  obtener_cliente_guest(
    id: any,
    token: string | number | null
  ): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token !== null ? token.toString() : '',
    });
    return this._http.get(
      this.url + 'obtener_cliente_guest/'+id,
      {
        headers: headers,
      }
    );
  }

  actualizar_perfil_cliente_guest(id: any,data: any, token: string | number | null): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json',Authorization: token !== null ? token.toString() : ''});
    return this._http.put(this.url + 'actualizar_perfil_cliente_guest/'+id,data,{headers: headers});
  }

}
