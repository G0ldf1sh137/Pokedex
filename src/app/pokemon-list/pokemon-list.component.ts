import { Component, OnInit } from '@angular/core';
import { PokedexApiService } from '../pokedex-api.service';
import { CdkStepperPrevious } from '@angular/cdk/stepper';
import { Observable, pipe, from, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: [];
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList$: Observable<PokemonList>;
  response: JSON;
  pokemonList: any[];

  offset: number = 0;
  limit: number = 20;
  page: number = 1;
  recordCount: number;

  constructor(private svc: PokedexApiService) {

    this.getPokemonList();

  }

  getPokemonList(){
    this.svc.getPokemonList(this.offset, this.limit).subscribe(
      pipe(
        tap(response => console.log(response) )
       // map(
       //   (response: PokemonList, index: number) => of(response.results, {id: index} )
        //)
      )
    );
  }

  nextPage(){
    if((this.offset + this.limit) < this.recordCount){
      this.page++;
      this.offset += this.limit;
      this.getPokemonList();
    }else{
      console.log('No more records!');
    }
  }

  prevPage(){
    if(this.page > 1){
      this.page--;
      this.offset -= this.limit;
      this.getPokemonList();
    } else {
      console.log("Can't go back!");
    }
  }

  ngOnInit() {
  }

}
