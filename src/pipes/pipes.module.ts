import { NgModule } from '@angular/core';
import { SecondeHousePipe } from './secondhand-house.pipe';
import { HousekeepingPipe } from './housekeeping.pipe';
import { ConvenienceInfoPipe } from './convenience-info.pipe';
import { CarpoolingPipe } from './carpooling.pipe';
import { SecondhandCarPipe } from './secondhand-car.pipe';
import { CarPipe } from './car.pipe';

@NgModule({
  declarations: [
    SecondeHousePipe,
    HousekeepingPipe,
    ConvenienceInfoPipe,
    CarpoolingPipe,
    SecondhandCarPipe,
    CarPipe
  ],
  imports: [
  ],
  exports: [
    SecondeHousePipe,
    HousekeepingPipe,
    ConvenienceInfoPipe,
    CarpoolingPipe,
    SecondhandCarPipe,
    CarPipe
  ]
})
export class PipesModule { }