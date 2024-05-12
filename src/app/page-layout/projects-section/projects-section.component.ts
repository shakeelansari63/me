import { Component, Input } from '@angular/core';
import { GitProjectModel } from '../../models/api';
import { GithubStatsService } from '../../services/github-stats.service';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  constructor(public statsService: GithubStatsService) {}
  @Input() projects: GitProjectModel[] = [];
}
