import { Injectable } from '@angular/core';
import { Serie } from "../models/serie";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseURL = 'https://api.themoviedb.org/3';
const apiKEY = '?api_key=772f2146252e87b49a85442c0c01214a&language=es';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Serie[]>{
    let url = baseURL+"/tv/popular"+apiKEY;
    return this.http.get<Serie[]>(url);
  }

  getSearch(term: any): Observable<Serie[]> {
    let url = baseURL+"/search/tv" + apiKEY+ `&query=${term}`;
    console.log(url);
    return this.http.get<Serie[]>(url);
  }

  get(id:any): Observable<any>{
    return this.http.get(`${baseURL}/tv/${id}${apiKEY}`);
  }
}
