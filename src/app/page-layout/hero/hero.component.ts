import { Component, Input } from '@angular/core';
import { GitProfileModel } from '../../models/api';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() userGithubProfile: GitProfileModel | null = null;
}
