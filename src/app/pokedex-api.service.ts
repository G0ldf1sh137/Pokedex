import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {

  urlBase = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }


  getPokemonList(offset: number, limit: number): Observable<any> {
    const url: string = this.urlBase + 'pokemon/?offset=' + (offset || 0) + '&limit=' + (limit || 30);
    return this.http.get(url);
  }

  getPokemon(id: number | string){
    const url: string = this.urlBase + 'pokemon/' + id;
    return this.http.get(url);
  }
}
