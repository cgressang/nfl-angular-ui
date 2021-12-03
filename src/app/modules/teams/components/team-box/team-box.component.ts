import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';

import { Team } from '@shared/models/team.model';

@Component({
  selector: 'team-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team-box.component.html',
  styleUrls: ['./team-box.component.scss']
})
export class TeamBoxComponent {
  @Input('team') team: Team
  constructor() { }

  ngOnInit(): void {

  }

}
