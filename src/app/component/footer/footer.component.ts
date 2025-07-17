import { Component } from '@angular/core';
import { ConditionalModule } from '../../conditional.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ...ConditionalModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
