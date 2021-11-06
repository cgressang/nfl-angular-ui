import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferenceService } from '@core/http/conference.service';
import { TeamService } from '@core/http/team.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from '@shared/store';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsPage } from './pages/teams/teams.page';
import { TeamInfoPage } from './pages/team-info/team-info.page';

import { ConferenceTeamListComponent } from './components/conference-team-list/conference-team-list.component';
import { TeamBoxComponent } from './components/team-box/team-box.component';
import { TeamHeaderComponent } from './components/team-header/team-header.component';
import { TeamScheduleComponent } from './components/team-schedule/team-schedule.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';


@NgModule({
  declarations: [
    TeamsPage,
    ConferenceTeamListComponent,
    TeamBoxComponent,
    TeamInfoPage,
    TeamHeaderComponent,
    TeamScheduleComponent,
    TeamInfoComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    StoreModule.forFeature('teams', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    ConferenceService,
    TeamService
  ]
})
export class TeamsModule { }
