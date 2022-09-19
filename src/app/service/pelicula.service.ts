import { Injectable } from '@angular/core';
import { Pelicula } from "../models/pelicula";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseURL = 'https://api.themoviedb.org/3/movie';
const apiKEY = '?api_key=772f2146252e87b49a85442c0c01214a';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Pelicula[]>{
    let url = baseURL+"/popular"+apiKEY;
    console.log(url);
    return this.http.get<Pelicula[]>(url);

  }

  get(id:any): Observable<any>{
    return this.http.get(`${baseURL}/${id}${apiKEY}`);
  }
}
