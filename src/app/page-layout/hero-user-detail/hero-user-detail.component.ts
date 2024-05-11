import { Component, Input } from '@angular/core';
import { GitProfileModel } from '../../models/api';
import { userData } from '../../data/user-data';

@Component({
  selector: 'app-hero-user-detail',
  templateUrl: './hero-user-detail.component.html',
  styleUrl: './hero-user-detail.component.scss',
})
export class HeroUserDetailComponent {
  constructor() {}
  userData = userData;
  @Input() userGithubProfile!: GitProfileModel | null;
}
