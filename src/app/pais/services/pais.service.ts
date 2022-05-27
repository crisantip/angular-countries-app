import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,population,flags,cca2')
  }

  constructor(private http: HttpClient){}
  
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
  
  buscarPorRegion(region: string): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      );
  }
}
