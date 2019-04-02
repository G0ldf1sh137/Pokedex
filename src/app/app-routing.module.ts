import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HomeComponent } from './layout/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon', component: PokemonListComponent },
  { path: 'pokemon/${id}', component: PokemonCardComponent },
  { path: 'detail', component: PokemonDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
