import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IViacepAddress, IViacepAddressError} from './viacep-address';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularCepService {

  constructor(private http: HttpClient) { }

  loadCEP(cep: string): Observable<IViacepAddress | IViacepAddressError> {
    return this.http.get<IViacepAddress | IViacepAddressError>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
