import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-schedule',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team-schedule.component.html',
  styleUrls: ['./team-schedule.component.scss']
})
export class TeamScheduleComponent {

  constructor() { }

}
