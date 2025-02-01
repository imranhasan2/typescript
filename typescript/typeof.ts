{
  //
  const person = "imran";
  type newPerson = typeof person;

  const person1: newPerson = "imran";

  const personn = {
    name: "imran",
    address: "sherpur",
    gender: "male",
  };

  type person2 = typeof personn;

  const newP: person2 = {
    name: "12",
    address: "sherpur",
    gender: "M",
  };

  type laptop = {
    name: string;
    brand: "hp" | "asus" | "mac";
  };

  const typeCheck = (info: string | laptop) => {
    if (typeof info === "string") {
      console.log(info);
    } else if ("name" in info && "brand" in info) {
      console.log(`${info.name} ${info.brand}`);
    }
  };

  console.log(typeCheck({ name: "asus", brand: "hp" }));

  //
}
