import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SwPlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(url?:string) {
    if(!url){
      url = 'https://swapi.dev/api/planets'
    }
    return this.http.get(url);
  }
  getPlanetInfo(id: any) {
    return this.http.get('https://swapi.dev/api/planets/' + (id));
  }
  getResidents(id: any) {
    return this.http.get('https://swapi.dev/api/people/' + (id));
  }
}

