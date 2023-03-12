export class Users {

  private name: string;
  private firstname: string;
  private email: string;
  private password: string;
  private image: string;
  private telephone: string;
  private linkedin: string;
  private created: Date;

  constructor(name: string = "", firstname: string = "", email: string = "", password: string = "", image: string = "",
      telephone: string = "",
      linkedin: string = "",
      created: Date = new Date()
  ) {
      this.name = name;
      this.firstname = firstname;
      this.email = email;
      this.password = password;
      this.image = image;
      this.telephone = telephone;
      this.linkedin = linkedin;
      this.created = created;
  }
}
