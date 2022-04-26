import { SwPlanetsService } from './../sw-planets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: any;
  nextPlanets: string = '';
  prevPlanets: string = '';

  constructor(private swPlanets: SwPlanetsService) { }

  ngOnInit(): void {
    this.getPlanetsList();
  }

  getPlanetsList(url?:string) {
    this.swPlanets.getPlanets(url)
      .subscribe((response: any) => {
        this.planets = response.results;
        this.nextPlanets = response.next;
        this.prevPlanets = response.previous;
      });
  }
}
