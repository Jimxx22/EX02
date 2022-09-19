import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from "../../service/serie.service";
import { Serie } from "../../models/serie";

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css']
})
export class SerieDetailsComponent implements OnInit {

  currentSerie: Serie = {
    id:'',
    original_name:'',
    overview:'',
    popularity:'',
    poster_path:'',
    first_air_date:'',
    name:'',
    vote_average:'',
    vote_count:''
  };
  message = '';

  constructor(private route :ActivatedRoute, private serieService: SerieService, private router: Router) { }

  ngOnInit(): void {
    this.message='';
    this.getSerie(this.route.snapshot.params['id']);
  }

  getSerie(id: string):void{
    this.serieService.get(id)
    .subscribe(
      data => {
        this.currentSerie = data;
        console.log(this.currentSerie);
      },
      error => {
        console.log(error);
    });
  }

}
