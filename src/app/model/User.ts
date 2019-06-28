export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gmt: string;
  groupName: string;
  owner: boolean;


  constructor(firstName: string, lastName: string, email: string, password: string, gmt: string, group: string, owner: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.gmt = gmt;
    this.groupName = group;
    this.owner = owner;
  }
}
