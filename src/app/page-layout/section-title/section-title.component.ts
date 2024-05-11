import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
})
export class SectionTitleComponent {
  @Input() anchor: string = '';
  @Input() hideTitle: boolean = false;
}
