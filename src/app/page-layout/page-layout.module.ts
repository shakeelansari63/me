import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [ToolBarComponent],
  imports: [CommonModule, ToolbarModule],
  exports: [ToolBarComponent],
})
export class PageLayoutModule {}
