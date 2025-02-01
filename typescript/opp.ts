{
  // class

  class person {
    name: string;
    Gender: string;

    constructor(name: string, Gender: string) {
      this.name = name;
      this.Gender = Gender;
    }

    work() {
      console.log(`his name is ${this.name} and his gender is ${this.Gender}`);
    }
  }

  const man = new person("nayeem", "male");
  console.log(man);
  man.work();
}
