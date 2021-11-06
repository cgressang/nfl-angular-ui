export class ConferenceTeam {
  id: number;
  name: string;
  url: string;

  constructor(d: any) {
    this.id = d.id;
    this.name = d.name;
    this.url = d.url;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name
  }

  getSiteUrl(): string {
    return this.url;
  }

  getSiteId(): string {
    return this.name.toLowerCase().replace(/ /g, '-');
  }
}