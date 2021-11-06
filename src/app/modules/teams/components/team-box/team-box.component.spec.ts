import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBoxComponent } from './team-box.component';

import { Team } from '@shared/models/team.model';
import teamData from '@core/mocks/data/team.json';

const team: Team = new Team(teamData);

describe('TeamBoxComponent', () => {
  let component: TeamBoxComponent;
  let fixture: ComponentFixture<TeamBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBoxComponent);
    component = fixture.componentInstance;
    component.team = team;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
