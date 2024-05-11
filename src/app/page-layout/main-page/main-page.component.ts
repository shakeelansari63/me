import { Component } from '@angular/core';
import { GithubApiServiceService } from '../../services/github-api-service.service';
import { GitProfileModel } from '../../models/api';
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

  ngOnInit(): void {
    this.apiService.getUserProfile().subscribe((result) => {
      this.userGithubProfile = result;
    });
  }
}
