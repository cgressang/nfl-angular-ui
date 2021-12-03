import { Component, OnInit, Input, ChangeDetectionStrategy, } from '@angular/core';

import { Conference } from '@shared/models/conference.model';
import { Team } from '@shared/models/team.model';

@Component({
  selector: 'conference-team-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './conference-team-list.component.html',
  styleUrls: ['./conference-team-list.component.scss']
})
export class ConferenceTeamListComponent {
  @Input() conference: Conference
  teams: Team[] = [];

  constructor() { }

  ngOnInit() {
    this.conference.getTeams().forEach((team: Team) => {
      this.teams.push(team);
    });
  }
}
