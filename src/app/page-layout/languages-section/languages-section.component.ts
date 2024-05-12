import { Component } from '@angular/core';
import { GithubStatsService } from '../../services/github-stats.service';

@Component({
  selector: 'app-languages-section',
  templateUrl: './languages-section.component.html',
  styleUrl: './languages-section.component.scss',
})
export class LanguagesSectionComponent {
  constructor(public githubStats: GithubStatsService) {}
}
