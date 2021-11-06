import { Coach } from './coach.model';
import { Owner } from './owner.model';
import { Staff } from './staff.model';

export class Team {
  id: number;
  location: string;
  name: string;
  abbr: string;
  established: number;
  url: string;
  stadium: string;
  division: string;
  conference: string;
  owners: Owner[];
  staff: Staff[];
  coaches: Coach[];


  constructor(d: any) {
    this.id = d.id;
    this.location = d.location;
    this.name = d.name;
    this.abbr = d.abbr;
    this.established = d.established;
    this.url = d.url;
    this.stadium = d.stadium;
    this.division = d.division;
    this.conference = d.conference;

    this.owners = [];

    if (typeof d.owners !== 'undefined' && d.owners.length > 0) {
      d.owners.forEach((owner: any) => {
        var temp = new Owner(owner);
        this.owners.push(temp);
      });
    }

    this.staff = [];

    if (typeof d.staff !== 'undefined' && d.staff.length > 0) {
      d.staff.forEach((staff: any) => {
        var temp = new Staff(staff);
        this.staff.push(temp);
      });
    }

    this.coaches = [];

    if (typeof d.coaches !== 'undefined' && d.coaches.length > 0) {
      d.coaches.forEach((coach: any) => {
        var temp = new Coach(coach);
        this.coaches.push(temp);
      });
    }
  }

  getId(): number {
    return this.id;
  }

  getSiteId(): string {
    return this.getName().toLowerCase().replace(/ /g, '-');
  }

  getLocation(): string {
    return this.location;
  }

  getName(): string {
    return this.location + " " + this.name;
  }

  getAbbr(): string {
    return this.abbr;
  }

  getEstablished(): number {
    return this.established;
  }

  getSiteUrl(): string {
    return this.url;
  }

  getStadium(): string {
    return this.stadium;
  }

  getDivision(): string {
    return this.conference + " " + this.division;
  }

  getOwners(): Owner[] {
    return this.owners;
  }

  getStaff(): Staff[] {
    return this.staff;
  }

  getCoaches(): Coach[] {
    return this.coaches;
  }
}