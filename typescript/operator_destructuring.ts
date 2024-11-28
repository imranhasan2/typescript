{
  const rolls: number[] = [1, 2, 3, 4, 5];
  const newRoll: number[] = [...rolls, 6, 7];
  // console.log(newRoll);

  // rest operator

  const [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a);
  console.log(b);
  console.log(rest);
  //
}
