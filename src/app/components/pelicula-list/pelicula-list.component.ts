import { Component, OnInit } from '@angular/core';
import { PeliculaService } from "../../service/pelicula.service";

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  peliculas:any;
  error:string = '';

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.peliculaService.getAll()
    .subscribe(
      result => {
        this.peliculas = result;
      },
      error => {
        this.error = error;
        console.log('error');
      }
    );

  }

}
