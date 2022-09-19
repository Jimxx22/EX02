import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from "../../models/pelicula";
import { PeliculaService } from "../../service/pelicula.service";

@Component({
  selector: 'app-pelicula-details',
  templateUrl: './pelicula-details.component.html',
  styleUrls: ['./pelicula-details.component.css']
})
export class PeliculaDetailsComponent implements OnInit {

  currentPelicula: Pelicula = {
    id:'',
    original_title:'',
    overview:'',
    popularity:'',
    poster_path:'',
    release_date:'',
    title:'',
    vote_average:'',
    vote_count:'',
    adult:'',
  };
  message = '';

  constructor(private route :ActivatedRoute, private peliculaService: PeliculaService, private router: Router) { }

  ngOnInit(): void {
    this.message='';
    this.getPelicula(this.route.snapshot.params['id']);
  }

  getPelicula(id: string):void{
    this.peliculaService.get(id)
    .subscribe(
      data => {
        this.currentPelicula = data;
        console.log(this.currentPelicula);
      },
      error => {
        console.log(error);
    });
  }

}
