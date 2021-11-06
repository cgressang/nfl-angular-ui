import { ConferenceTeam } from './conference-team.model';

export class Conference {
  private id: number;
  private name: string;
  private abbr: string;
  private teams: Map<string, ConferenceTeam>;

  constructor(d: any) {
    this.id = d.id;
    this.name = d.name;
    this.abbr = d.abbr;
    this.teams = new Map<string, ConferenceTeam>();

    if (typeof d.team_list !== 'undefined' && d.team_list.length > 0) {
      d.team_list.forEach((team: any) => {
        var temp = new ConferenceTeam(team);
        this.teams.set(temp.getSiteId(), temp);
      });
    }
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAbbr(): string {
    return this.abbr;
  }

  getTeams(): Map<string, ConferenceTeam> {
    return this.teams;
  }
}