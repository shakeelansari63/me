import { Component, Input } from '@angular/core';
import { GitProjectModel } from '../../models/api';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  @Input() projects: GitProjectModel[] = [];
}