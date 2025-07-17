import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { NzModules } from '../../../antd.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports:[
    TopBarComponent,
    MenuLeftComponent,
    ...NzModules['NzLayout'],
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

}
