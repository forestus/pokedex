import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private pokemonUrlDetails: string = 'https://pokeapi.co/api/v2/pokemon/'
  private pokeMonUrlName: string = 'https://pokeapi.co/api/v2/pokemon-species/'

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon
  }

  get getPokemon(){
    const pokemon_id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(this.pokemonUrlDetails + pokemon_id);
    const name = this.pokeApiService.apiGetPokemons(this.pokeMonUrlName + pokemon_id);
    return forkJoin([pokemon, name]).subscribe(res=>{
      this.pokemon = res;
      this.isLoading = true
    },
    error=>{
      this.apiError = true
    })
  }
}
