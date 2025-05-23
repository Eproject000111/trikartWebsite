import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const MODULES = [
  CommonModule,
  RouterModule
]

const COMPONENT = [
  FooterComponent,
  HeaderComponent
]



@NgModule({
  declarations: [...COMPONENT],
  imports: [...MODULES],
  exports: [...COMPONENT,...MODULES],
})
export class SharedModule { }
