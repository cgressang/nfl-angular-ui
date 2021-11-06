import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';

import { ConferenceTeam } from '@shared/models/conference-team.model';

@Component({
  selector: 'team-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team-box.component.html',
  styleUrls: ['./team-box.component.scss']
})
export class TeamBoxComponent {
  @Input('team') team: ConferenceTeam
  constructor() { }

  ngOnInit(): void {

  }

}
