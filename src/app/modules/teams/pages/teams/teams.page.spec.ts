import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { Conference } from '@shared/models/conference.model';

import { TeamsPage } from './teams.page';

describe('TeamsPage', () => {
  let component: TeamsPage;
  let fixture: ComponentFixture<TeamsPage>;

  let store: MockStore;
  const initialState = {
    router: {},
    teams: {
      conferences: {
        entities: [] as Conference[],
        loading: false,
        loaded: false,
        error: {}
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsPage ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
