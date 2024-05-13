import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userData } from '../data/user-data';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from 'primeng/api';
import {
  GitProfileModel,
  GitProjectModel,
  ProjectSearchResultModel,
} from '../models/api';

@Injectable({
  providedIn: 'root',
})
export class GithubApiServiceService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private baseApiUrl = 'https://api.github.com';
  private userProfile$: BehaviorSubject<GitProfileModel | null> =
    new BehaviorSubject<GitProfileModel | null>(null);

  private userProjects$: BehaviorSubject<any | null> = new BehaviorSubject<
    GitProjectModel[] | null
  >(null);

  public getUserProfile() {
    if (this.userProfile$.value === null) this.setUserProfile();

    return this.userProfile$;
  }

  public getUserProjects() {
    if (this.userProjects$.value === null) this.setUserProjects();

    return this.userProjects$;
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
}
