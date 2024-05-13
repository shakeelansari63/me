import { Component, OnInit } from '@angular/core';
import { userData } from '../../data/user-data';
import { GithubApiServiceService } from '../../services/github-api-service.service';
import { HeatMapDate } from '../../lib/ngx-heatmap-calendar.interface';

@Component({
  selector: 'app-activity-section',
  templateUrl: './activity-section.component.html',
  styleUrl: './activity-section.component.scss',
})
export class ActivitySectionComponent implements OnInit {
  constructor(public gitService: GithubApiServiceService) {}

  ngOnInit(): void {}

  callBackCssClass = ({ value }: HeatMapDate) => {
    switch (value) {
      case 1:
        return 'fill-value-1';
      case 2:
        return 'fill-value-2';
      case 3:
        return 'fill-value-3';
      case 4:
        return 'fill-value-4';
      default:
        return 'fill-value-0';
    }
  };
}
