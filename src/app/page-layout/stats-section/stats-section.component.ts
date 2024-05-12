import { Component } from '@angular/core';
import { GithubStatsService } from '../../services/github-stats.service';

@Component({
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.scss',
})
export class StatsSectionComponent {
  constructor(public githubStats: GithubStatsService) {}
}
