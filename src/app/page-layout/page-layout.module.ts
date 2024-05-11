import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroComponent } from './hero/hero.component';
import { HeroUserDetailComponent } from './hero-user-detail/hero-user-detail.component';
import { HeroUserSkillsComponent } from './hero-user-skills/hero-user-skills.component';

@NgModule({
  declarations: [
    ToolBarComponent,
    MainPageComponent,
    HeroComponent,
    HeroUserDetailComponent,
    HeroUserSkillsComponent,
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SplitterModule,
    CardModule,
  ],
  exports: [MainPageComponent],
})
export class PageLayoutModule {}
