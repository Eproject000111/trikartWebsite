import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-raw',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './raw.component.html',
  styleUrl: './raw.component.scss'
})
export class RawComponent {

}
