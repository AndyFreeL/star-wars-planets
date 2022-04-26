import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets/planets.component';


const routes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: ':id/:name', component: PlanetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
