import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamsPage } from './pages/teams/teams.page';
import { TeamInfoPage } from './pages/team-info/team-info.page';

import { LoadConferencesGuard } from '@core/guards/load-conferences.guard';
import { HasTeamGuard } from '@core/guards/has-team.guard';

const routes: Routes = [
  { path: '', canActivate: [LoadConferencesGuard], component: TeamsPage },
  { path: ':type', canActivate: [LoadConferencesGuard, HasTeamGuard], component: TeamInfoPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
