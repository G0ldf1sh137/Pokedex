import { Component, OnInit } from '@angular/core';
import { PokedexApiService } from '../pokedex-api.service';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  response: JSON;

  constructor(private svc: PokedexApiService) {

    svc.getPokemonList(10, 100)
    .subscribe(
      response => {
        this.response = response;
        console.log(response);
      }
    );


   }

  ngOnInit() {
  }

}
