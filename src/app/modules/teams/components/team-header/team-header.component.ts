import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './team-header.component.html',
  styleUrls: ['./team-header.component.scss']
})
export class TeamHeaderComponent {
  @Input() name: string;
  @Input() division: string;
  @Input() siteUrl: string;

  constructor() { }
}
