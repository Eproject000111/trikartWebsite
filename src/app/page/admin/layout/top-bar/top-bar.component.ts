import { Component } from '@angular/core';
import { NzModules } from '../../../../antd.module';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports:[
    ...NzModules['NzDropDown'],
    ...NzModules['NzAvatar']
  ],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

}
