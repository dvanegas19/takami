import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tipoescudos } from '../models/tipoescudos';

@Injectable({
  providedIn: 'root'
})
export class DeflectoresService {
  constructor(private http: HttpClient) { }
  totalAngularPackages;
  ngOnInit() {      
    // Simple GET request with response type <any>
   
}

obtenerDeflectores(): Observable<object>{
  return this.http.get<object>('http://localhost:3000/api/v1/escudos');

}

deleteDeflectores(id:number ):Observable<object>{
  return this.http.delete<object>('http://localhost:3000/api/v1/escudos?id='+id);

}
  
editarDeflectores(model: object):Observable<object>{
  return this.http.put<object>('http://localhost:3000/api/v1/escudos', model);
}

agregarDeflectores(model: object):Observable<object>{
  return this.http.post<object>('http://localhost:3000/api/v1/escudos', model);
}
  
}
