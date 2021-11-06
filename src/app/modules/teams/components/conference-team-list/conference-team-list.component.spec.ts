import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ConferenceTeamListComponent } from './conference-team-list.component';
import { TeamBoxComponent } from '../team-box/team-box.component';

import { Conference } from '@shared/models/conference.model';
import conferenceData from '@core/mocks/data/conference-teams.json';


const conference: Conference = new Conference(conferenceData[0]);

describe('ConferenceTeamListComponent', () => {
  let component: ConferenceTeamListComponent;
  let fixture: ComponentFixture<ConferenceTeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConferenceTeamListComponent,
        TeamBoxComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceTeamListComponent);
    component = fixture.componentInstance;

    component.conference = conference;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
