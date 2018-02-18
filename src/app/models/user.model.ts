export class User {
  public userName: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  public constructor(
    _userName: string, _firstName: string, _lastName: string,
    _email: string, _password: string
  ) {
    this.userName  = _userName;
    this.firstName = _firstName;
    this.lastName  = _lastName;
    this.email     = _email;
    this.password  = _password;
  }
}
