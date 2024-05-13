import { Component, Input } from '@angular/core';
import { GitProjectModel } from '../../models/api';
import { GithubStatsService } from '../../services/github-stats.service';
import { userData } from '../../data/user-data';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  userProjectRepo = `https://github.com/${userData.githubUser}?tab=repositories`;

  constructor(public statsService: GithubStatsService) {}
  @Input() projects: GitProjectModel[] = [];

  openProject(projectname: string) {
    window.open(
      `https://github.com/${userData.githubUser}/${projectname}`,
      '_blank'
    );
  }
}
