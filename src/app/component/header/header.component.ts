import { Component } from '@angular/core';
import { ConditionalModule } from '../../conditional.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ...ConditionalModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
