import { NgModule } from '@angular/core';
import { SecondeHousePipe } from './secondhand-house.pipe';
import { HousekeepingPipe } from './housekeeping.pipe';
import { ConvenienceInfoPipe } from './convenience-info.pipe';
import { CarpoolingPipe } from './carpooling.pipe';

@NgModule({
  declarations: [
    SecondeHousePipe,
    HousekeepingPipe,
    ConvenienceInfoPipe,
    CarpoolingPipe
  ],
  imports: [
  ],
  exports: [
    SecondeHousePipe,
    HousekeepingPipe,
    ConvenienceInfoPipe,
    CarpoolingPipe
  ]
})
export class PipesModule { }