import { SwPlanetsService } from './sw-planets.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetComponent } from './planet/planet.component';
import { ResidentComponent } from './resident/resident.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetComponent,
    ResidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SwPlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
