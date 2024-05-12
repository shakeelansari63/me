import { Injectable } from '@angular/core';
import { userData } from '../data/user-data';

@Injectable({
  providedIn: 'root',
})
export class GithubStatsService {
  constructor() {}
  private baseApiUrl = 'http://github-profile-summary-cards.vercel.app';
  private theme = 'dark';

  public getUserMainStats() {
    return `${this.baseApiUrl}/api/cards/profile-details?username=${userData.githubUser}&theme=${this.theme}`;
  }
}
