export class Owner {
  private id: number;
  private firstName: string;
  private lastName: string;

  constructor(d: any) {
    this.id = d.id;
    this.firstName = d.first_name;
    this.lastName = d.last_name;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.firstName + " " + this.lastName;
  }
}