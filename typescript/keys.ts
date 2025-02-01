{
  // use of keyof
  type car = {
    model: string;
    year: number;
  };

  type owner1 = keyof car;

  const person = {
    name: "imran",
    number: 37744,
    Gender: "Male",
  };

  // console.log(person["Gender"]);

  type person = {
    name: string;
    number: number;
    Gender: string;
  };

  const Person: person = {
    name: "imran",
    number: 74573,
    Gender: "male",
  };

  const property = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
  };

  console.log(property(Person, "Gender"));
}
