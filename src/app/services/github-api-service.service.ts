import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userData } from '../data/user-data';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from 'primeng/api';
import {
  GitProfileModel,
  GitProjectModel,
  ProjectSearchResultModel,
  ContributionResult,
  ContributionData,
  ContribSubject,
} from '../models/api';
import { HeatMapDate } from '../lib/ngx-heatmap-calendar.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubApiServiceService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private baseApiUrl = 'https://api.github.com';
  private contribBaseUrl = 'https://gh-calendar.rschristian.dev';
  private userProfile$: BehaviorSubject<GitProfileModel | null> =
    new BehaviorSubject<GitProfileModel | null>(null);

  private userProjects$: BehaviorSubject<any | null> = new BehaviorSubject<
    GitProjectModel[] | null
  >(null);
  private userContributions$: BehaviorSubject<ContribSubject | null> =
    new BehaviorSubject<ContribSubject | null>(null);

  public getUserProfile() {
    if (this.userProfile$.value === null) this.setUserProfile();

    return this.userProfile$;
  }

  public getUserProjects() {
    if (this.userProjects$.value === null) this.setUserProjects();

    return this.userProjects$;
  }

  public getUserContributions() {
    if (this.userContributions$.value === null) this.setUserContributions();

    return this.userContributions$;
  }

  private setUserProfile() {
    this.http.get(this.baseApiUrl + `/users/${userData.githubUser}`).subscribe(
      (profile) => {
        const profileData = Object.setPrototypeOf(
          profile,
          GitProfileModel.prototype
        );
        this.userProfile$.next(profileData);
      },
      (error) =>
        this.messageService.add({
          severity: 'error',
          summary: 'API Error',
          detail: error,
        })
    );
  }

  private setUserProjects() {
    this.http
      .get(
        this.baseApiUrl +
          `/search/repositories?q=user:${userData.githubUser}+fork:false+archived:false&sort=stars&per_page=10&type=Repositories`
      )
      .subscribe(
        (projectResult) => {
          const projResultData = Object.setPrototypeOf(
            projectResult,
            ProjectSearchResultModel.prototype
          );
          this.userProjects$.next(projResultData.items);
        },
        (error) =>
          this.messageService.add({
            severity: 'error',
            summary: 'API Error',
            detail: error,
          })
      );
  }

  private setUserContributions() {
    this.http
      .get(this.contribBaseUrl + `/user/${userData.githubUser}  `)
      .subscribe(
        (contribResult) => {
          let contribData: ContributionData[] = [];
          const contribResultData: ContributionResult = Object.setPrototypeOf(
            contribResult,
            ContributionResult.prototype
          );
          contribResultData.contributions.forEach(
            (contrib) => (contribData = [...contribData, ...contrib])
          );

          // Convert date to Heatmap Data
          const hmData = this.convertContribDataToHeatMapData(contribData);
          const startDate: Date = hmData
            ?.map((a) => a.date)
            .reduce((a, b) => (a < b ? a : b))!;
          const endDate: Date = hmData
            ?.map((a) => a.date)
            .reduce((a, b) => (a > b ? a : b))!;

          this.userContributions$.next({
            data: hmData,
            startDate: startDate,
            endDate: endDate,
          });

          console.log(this.userContributions$.value);
        },
        (error) =>
          this.messageService.add({
            severity: 'error',
            summary: 'API Error',
            detail: error,
          })
      );
  }

  private convertContribDataToHeatMapData(
    contribData: ContributionData[]
  ): HeatMapDate[] {
    return contribData.map((contrib) => {
      return {
        date: new Date(contrib.date),
        value: parseInt(contrib.intensity),
      };
    });
  }
}
