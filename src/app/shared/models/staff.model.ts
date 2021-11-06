export class Staff {
  private id: number;
  private firstName: string;
  private lastName: string;
  private position: string;

  constructor(d: any) {
    this.id = d.id;
    this.firstName = d.first_name;
    this.lastName = d.last_name;
    this.position = d.position;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.firstName + " " + this.lastName;
  }

  getPosition(): string {
    return this.position;
  }
}