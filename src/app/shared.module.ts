import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './page/auths/login/login.component';
import { AntdModule } from './antd.module';

const MODULES = [
  CommonModule,
  RouterModule,
  AntdModule
]

const COMPONENT = [
  FooterComponent,
  HeaderComponent,
  LoginComponent
]



@NgModule({
  declarations: [...COMPONENT],
  imports: [...MODULES],
  exports: [...COMPONENT,...MODULES],
})
export class SharedModule { }
