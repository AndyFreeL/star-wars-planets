import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SwPlanetsService} from '../sw-planets.service';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss']
})
export class ResidentComponent implements OnInit {

  @Input() residentId: any;

  @Input() genderFilter: string = 'all';

  residentInfo: {
    name: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
  } = {
    name: 'string',
    height: 0,
    mass: 0,
    hair_color: 'string',
    skin_color: 'string',
    eye_color: 'string',
    birth_year: 'string',
    gender: 'string',
  };

  constructor(private swServise: SwPlanetsService) {
  }

  ngOnInit(): void {
    this.swServise.getResidents(this.residentId).subscribe((response: any) => {
      this.residentInfo = response;
    })
  }

  setHidden(gender: string) {
    if (gender === this.genderFilter) {
      return true;
    } else if (this.genderFilter === 'all') {
      return true;
    }
    return false;
  }
}
