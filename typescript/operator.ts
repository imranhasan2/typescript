{
  // spread operator

  const arr: number[] = [1, 2, 3, 4, 5, 6];

  const newarr: number[] = [...arr, 23, 4];
  console.log(newarr);

  // we can use spread operator in the object also

  // rest operator

  const [i, ...rest] = ["imran", "baki", "sob"];
  console.log("i", i);
  console.log(rest);
}
