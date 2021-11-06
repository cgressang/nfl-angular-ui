import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Owner } from '@shared/models/owner.model';
import { Coach } from '@shared/models/coach.model';
import { Staff } from '@shared/models/staff.model';


@Component({
  selector: 'team-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent {
  @Input() owners: Owner[];
  @Input() coaches: Coach[];
  @Input() staff: Staff[];
  @Input() stadium: string;
  @Input() established: number;

  constructor() { }

}
