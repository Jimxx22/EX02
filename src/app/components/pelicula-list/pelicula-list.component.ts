import { Component, OnInit } from '@angular/core';
import { PeliculaService } from "../../service/pelicula.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  peliculas:any;
  error:string = '';
  titulo:string='';

  constructor(private router: Router, private peliculaService: PeliculaService, private route :ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['term']!=null) {
      this.titulo="Buscar: "+this.route.snapshot.params['term'];
      this.getSearch(this.route.snapshot.params['term']);
    }else{
      this.titulo="Peliculas más populares";
      this.getAllPeliculas();
    }
  }

  getAllPeliculas(){
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

  getSearch(term :string){
    this.peliculaService.getSearch(term)
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
