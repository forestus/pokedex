import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res=>{
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
      },
      error=>{
        this.apiError = true
      }
    )
  }

  getSearch(textSearchInput: string){
    const filterPokemons = this.setAllPokemons.filter((res: any) =>!res.name.indexOf(textSearchInput.toLowerCase()))
    console.log(textSearchInput)
    this.getAllPokemons = filterPokemons
  }

}
