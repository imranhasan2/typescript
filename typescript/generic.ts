{
  // generic with type
  // type

  type arrayType<p> = Array<p>;

  const number: arrayType<number> = [1, 2, 3, 4, 5, 6, 7];
  const string: arrayType<string> = ["imran", "nayeem", "raju", "riyal"];

  //interface with generic
  interface Person<T, N> {
    name: string;
    address: string;
    email: T;
    Gendar: boolean;
    mobile: N;
  }

  const person: Person<string, number> = {
    name: "imran",
    address: "sherpur",
    email: "a@c",
    Gendar: true,
    mobile: 156373,
  };

  // generic with function

  const GenericFun = <t>(message: t) => {
    return message;
  };

  console.log(GenericFun<number>(123));
}
