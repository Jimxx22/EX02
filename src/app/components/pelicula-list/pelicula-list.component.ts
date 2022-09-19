import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  peliculas:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://api.themoviedb.org/3/movie/550?api_key=772f2146252e87b49a85442c0c01214a")
    .subscribe(
      result => {
        this.peliculas = result;
      },
      error => {
        console.log('error');
      }
    );
  }

}
