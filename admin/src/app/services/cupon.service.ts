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
}
