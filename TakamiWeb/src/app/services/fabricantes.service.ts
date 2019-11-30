import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FabricantesService {
  
  constructor(private http: HttpClient) { }

  getFabricantes(): Observable<object>{
    return this.http.get<object>('http://localhost:3000/api/v1/fabricantes');

  }
}
