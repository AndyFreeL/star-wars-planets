import { SwPlanetsService } from './../sw-planets.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})

export class PlanetComponent implements OnInit {



    planetInfo: {
    name: string, rotation_period: number,
    orbital_period: number, diameter: number, climate: string,
    gravity: string, surface_water: string, terrain: string, population: number
  } = {
      name: '',
      rotation_period: 0,
      orbital_period: 0,
      diameter: 0,
      climate: '',
      gravity: '',
      surface_water: '',
      terrain: '',
      population: 0
    };

  residentsList: [] = [];

  filterList:string[] = [
    'all', 'male', 'female', 'n/a'
  ];

  id: string = '';
  name: string = '';
  gender:string='all';
  activeItem:string='all';

  constructor(private route: ActivatedRoute, private swServise: SwPlanetsService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot);
    this.route.params.subscribe((params) => {
      this.name = params['name'];
      this.id = params['id'];
    });
    this.swServise.getPlanetInfo(this.id).subscribe((response: any) => {
      this.planetInfo = response;
      this.residentsList = response.residents.map((resident: any) => resident.split('/')[5])
    });
  }
  setFilter(str:string){
    this.gender = str;
  this.activeItem = str;
  }
}
