import { Component } from '@angular/core';
import { GithubApiServiceService } from '../../services/github-api-service.service';
import { GitProfileModel, GitProjectModel } from '../../models/api';
import { userData } from '../../data/user-data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  constructor(private apiService: GithubApiServiceService) {}
  userData = userData;
  userGithubProfile!: GitProfileModel | null;
  userProjects!: GitProjectModel[] | null;

  ngOnInit(): void {
    this.apiService.getUserProfile().subscribe((result) => {
      this.userGithubProfile = result;
    });

    this.apiService.getUserProjects().subscribe((result) => {
      this.userProjects = result;
    });
  }
}
