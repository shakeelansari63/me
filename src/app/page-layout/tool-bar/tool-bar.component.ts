import { Component } from '@angular/core';
import { userData } from '../../data/user-data';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss',
})
export class ToolBarComponent {
  username = `@${userData.devUsername}`;
}
