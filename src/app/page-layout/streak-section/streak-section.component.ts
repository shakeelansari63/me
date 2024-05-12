import { Component } from '@angular/core';
import { GithubStatsService } from '../../services/github-stats.service';

@Component({
  selector: 'app-streak-section',
  templateUrl: './streak-section.component.html',
  styleUrl: './streak-section.component.scss',
})
export class StreakSectionComponent {
  constructor(public githubStats: GithubStatsService) {}
}
