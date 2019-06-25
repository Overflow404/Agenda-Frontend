export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gmt: string;


  constructor(firstName: string, lastName: string, email: string, password: string, gmt: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.gmt = gmt;
  }
}
