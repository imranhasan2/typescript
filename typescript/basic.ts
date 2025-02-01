{
  // array

  const arr: number[] = [12, 3, 4, 5, 6];

  // tupple

  const tupple: [string, string, number, number, number, number] = [
    "imran",
    "nayeem",
    1,
    2,
    3,
    4,
  ];
  console.log(tupple);

  // object tyoe in tsc

  type Person = {
    name: string;
    age: number;
    house: string;
    earning: number;
    job: boolean;
  };

  const person: Person = {
    name: "imran",
    age: 25,
    house: "sherpur",
    earning: 0,
    job: false,
  };
}
