import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { TeamInfoPage } from './team-info.page';
import { TeamHeaderComponent } from '@modules/teams/components/team-header/team-header.component';
import { TeamInfoComponent } from '@modules/teams/components/team-info/team-info.component';
import { TeamScheduleComponent } from '@modules/teams/components/team-schedule/team-schedule.component';

import { Team } from '@shared/models/team.model';
import teamData from '@core/mocks/data/team.json';

const team: Team = new Team(teamData);

describe('TeamInfoPage', () => {
  let component: TeamInfoPage;
  let fixture: ComponentFixture<TeamInfoPage>;

  let store: MockStore;
  const initialState = {
    router: {},
    teams: {
      team: {
        team: team,
        loading: false,
        loaded: true,
        error: {}
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TeamInfoPage,
        TeamHeaderComponent,
        TeamInfoComponent,
        TeamScheduleComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
