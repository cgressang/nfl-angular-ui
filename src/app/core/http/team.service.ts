import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Team } from '@shared/models/team.model';

import { EnvironmentService } from '@core/services/environment.service';

interface ITeamService {
  getTeam(id: number): Observable<Team>;
}

@Injectable()
export class TeamService implements ITeamService {
  private baseUrl;

  constructor(private httpClient: HttpClient, private env: EnvironmentService) {
    this.baseUrl = env.apiUrl;
  }

  getTeam(id: number): Observable<Team> {
    return this.httpClient.get<any>(this.baseUrl + '/v1/team/' + id).pipe(map(
      (value: any) => {
        return new Team(value);
      }
    ));
  }
}