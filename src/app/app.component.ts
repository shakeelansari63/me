import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageLayoutModule } from './page-layout/page-layout.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
}
