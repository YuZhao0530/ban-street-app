import { NgModule } from '@angular/core';
import { SecondeHousePipe } from './secondhand-house.pipe';
import { HousekeepingPipe } from './housekeeping.pipe';
import { ConvenienceInfoPipe } from './convenience-info.pipe';

@NgModule({
  declarations: [
    SecondeHousePipe,
    HousekeepingPipe,
    ConvenienceInfoPipe
  ],
  imports: [
  ],
  exports: [
    SecondeHousePipe,
    HousekeepingPipe,
    ConvenienceInfoPipe
  ]
})
export class PipesModule { }