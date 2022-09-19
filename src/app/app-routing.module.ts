import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { PeliculaDetailsComponent } from "./components/pelicula-details/pelicula-details.component";
import { PeliculaListComponent } from "./components/pelicula-list/pelicula-list.component";
import { SerieDetailsComponent } from "./components/serie-details/serie-details.component";
import { SerieListComponent } from "./components/serie-list/serie-list.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'pelicula/:id', component:PeliculaDetailsComponent },
  { path: 'peliculas', component:PeliculaListComponent },
  { path: 'peliculas/:term', component:PeliculaListComponent },
  { path: 'serie/:id', component:SerieDetailsComponent },
  { path: 'series', component:SerieListComponent },
  { path: 'series/:term', component:SerieListComponent },
  { path: 'login', component:LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
