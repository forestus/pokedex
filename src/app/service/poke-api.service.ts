import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000'

  constructor(
    private http: HttpClient
  ) { }

get apiListAllPokemons():Observable<any>{
  return this.http.get<any>(this.url).pipe(
    tap(
      res=>{
        res.results.map((pokemon: any)=>{
          this.apiGetPokemons(pokemon.url).subscribe(
            res => pokemon.status = res
          )
        })
      },
    )
  )
}

public apiGetPokemons(url: string): Observable<any>{
  return this.http.get<any>(url)
}
}

