import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RawComponent } from './raw/raw.component';
import { SharedModule } from '../shared.module';

const MODULE = [
  CommonModule,
  SharedModule
]

const COMPONENTS = [
  RawComponent
]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULE],
  exports: [...COMPONENTS,...MODULE]
})
export class LayoutModule { }
