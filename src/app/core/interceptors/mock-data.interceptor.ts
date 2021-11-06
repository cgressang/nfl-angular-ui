import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EnvironmentService } from '../services/environment.service';

import conferenceDivisions from '../mocks/data/conference-divisions.json';
import conferenceTeams from '../mocks/data/conference-teams.json';
import team from '../mocks/data/team.json';

const mockDataFixture = [
  {
    url: 'http://localhost/api/v1/conference/divisions',
    data: conferenceDivisions
  },
  {
    url: 'http://localhost/api/v1/conference/teams',
    data: conferenceTeams
  },
  {
    url: 'http://localhost/api/v1/team',
    data: team
  },
];


@Injectable()
export class MockDataInterceptor implements HttpInterceptor {

  constructor(private envService: EnvironmentService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let update = {};
    if (this.envService.enableMockData) {
      let match = false;
      for (const fixture of mockDataFixture) {
        if (request.url.indexOf(fixture.url) != -1) {
          return of(new HttpResponse({ status: 200, body: fixture.data }));
        }
      }

      if (match) {
        request = request.clone(update);
      }
    }
    return next.handle(request);
  }
}