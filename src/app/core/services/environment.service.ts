import { IEnvironment, LogLevel } from '../../../environments/environment-interface';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements IEnvironment {
  constructor() {}

  get production(): boolean {
    return environment.production;
  }

  get apiUrl(): string {
    return environment.apiUrl;
  }

  get enableDebugTools(): boolean {
    return environment.enableDebugTools;
  }

  get logLevel(): LogLevel {
    return environment.logLevel;
  }

  get enableMockData(): boolean {
    return environment.enableMockData;
  }
}