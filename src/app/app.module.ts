import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokedexApiService } from './pokedex-api.service';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { LayoutModule } from './layout/layout.module';
import { MatButtonModule, MatListModule, MatToolbarModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [PokedexApiService],
  bootstrap: [AppComponent],
  exports: [PokemonDetailComponent, PokemonListComponent]
})
export class AppModule { }
