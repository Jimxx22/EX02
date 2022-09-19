import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaDetailsComponent } from './components/pelicula-details/pelicula-details.component';
import { SerieDetailsComponent } from './components/serie-details/serie-details.component';
import { PeliculaListComponent } from './components/pelicula-list/pelicula-list.component';
import { SerieListComponent } from './components/serie-list/serie-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PeliculaDetailsComponent,
    SerieDetailsComponent,
    PeliculaListComponent,
    SerieListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
