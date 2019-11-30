import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {tipoescudos} from '../models/tipoescudos';

@Injectable({
  providedIn: 'root'
})
export class TipoescudosService {

  constructor(private http: HttpClient) { }

  getTipoEscudos(): Observable<object>{
    return this.http.get<object>('http://localhost:3000/api/v1/tipoEscudos');

  }

  
}
