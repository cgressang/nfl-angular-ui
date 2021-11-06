import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Conference } from '@shared/models/conference.model';

import { EnvironmentService } from '@core/services/environment.service';

interface IConferenceService {
  getConferences(): Observable<Conference[]>;
}

@Injectable()
export class ConferenceService implements IConferenceService {
  private baseUrl;

  constructor(private httpClient: HttpClient, private env: EnvironmentService) {
    this.baseUrl = env.apiUrl;
  }

  getConferences(): Observable<Conference[]> {
    return this.httpClient.get<any[]>(this.baseUrl + '/v1/conference/teams').pipe(map(
      (value: any[]) => {
        const conferences: Conference[] = [];

        for (let x = 0; x < value.length; x++) {
          conferences.push(new Conference(value[x]));
        }
        return conferences;
      }
    ));
  }
}