import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { TeamInfoPage } from './team-info.page';
import { TeamHeaderComponent } from '@modules/teams/components/team-header/team-header.component';
import { TeamInfoComponent } from '@modules/teams/components/team-info/team-info.component';
import { TeamScheduleComponent } from '@modules/teams/components/team-schedule/team-schedule.component';

import { Conference } from '@shared/models/conference.model';
import ConferenceTeamsData from '@core/mocks/data/conference-teams.json';

const conferences: Conference[] = [];
conferences.push(new Conference(ConferenceTeamsData[0]));
conferences.push(new Conference(ConferenceTeamsData[1]));

describe('TeamInfoPage', () => {
  let component: TeamInfoPage;
  let fixture: ComponentFixture<TeamInfoPage>;

  let store: MockStore;
  const initialState = {
    router: {
      state: {
        url: "/teams/baltimore-ravens",
        params: {
          type: "baltimore-ravens"
        }
      }
    },
    teams: {
      conferences: {
        entities: conferences,
        loading: false,
        loaded: false,
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
