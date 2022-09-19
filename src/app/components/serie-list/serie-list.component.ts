import { Component, OnInit } from '@angular/core';
import { SerieService } from "../../service/serie.service";

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series:any;
  error:string = '';

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
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

}
