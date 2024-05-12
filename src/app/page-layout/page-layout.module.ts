import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroComponent } from './hero/hero.component';
import { HeroUserDetailComponent } from './hero-user-detail/hero-user-detail.component';
import { HeroUserSkillsComponent } from './hero-user-skills/hero-user-skills.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { StatsSectionComponent } from './stats-section/stats-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { LanguagesSectionComponent } from './languages-section/languages-section.component';
import { StreakSectionComponent } from './streak-section/streak-section.component';
import { ActivitySectionComponent } from './activity-section/activity-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  declarations: [
    ToolBarComponent,
    MainPageComponent,
    HeroComponent,
    HeroUserDetailComponent,
    HeroUserSkillsComponent,
    SectionTitleComponent,
    StatsSectionComponent,
    ProjectsSectionComponent,
    LanguagesSectionComponent,
    StreakSectionComponent,
    ActivitySectionComponent,
    FooterSectionComponent,
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SplitterModule,
    CardModule,
    ImageModule,
  ],
  exports: [MainPageComponent],
})
export class PageLayoutModule {}
