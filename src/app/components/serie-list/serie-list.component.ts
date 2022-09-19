import { Component, OnInit } from '@angular/core';
import { SerieService } from "../../service/serie.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series:any;
  error:string = '';
  titulo:string='';

  constructor(private serieService: SerieService, private router: Router, private route :ActivatedRoute) { }

  ngOnInit(): void {

    if (this.route.snapshot.params['term']!=null) {
      this.titulo="Buscar: "+this.route.snapshot.params['term'];
      this.getSearch(this.route.snapshot.params['term']);
    }else{
      this.titulo="Peliculas más populares";
      this.getAllSeries();
    }
  }

  getAllSeries(){
    this.serieService.getAll()
    .subscribe(
      result => {
        this.series = result;
      },
      error => {
        this.error = error;
        console.log('error');
      }
    );
  }

  getSearch(term :string){
    this.serieService.getSearch(term)
    .subscribe(
      result => {
        this.series = result;
      },
      error => {
        this.error = error;
        console.log('error');
      }
    );
  }

}
