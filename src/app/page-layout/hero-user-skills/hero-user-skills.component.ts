import { Component, Input } from '@angular/core';
import { GitProfileModel } from '../../models/api';
import { userData } from '../../data/user-data';

@Component({
  selector: 'app-hero-user-skills',
  templateUrl: './hero-user-skills.component.html',
  styleUrl: './hero-user-skills.component.scss',
})
export class HeroUserSkillsComponent {
  userData = userData;
  @Input() userGithubProfile!: GitProfileModel | null;
}
