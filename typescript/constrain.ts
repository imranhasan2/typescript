{
  //

  // constrain

  const constrn = <T extends { length: number }>(num: T) => {
    return num.length;
  };

  console.log(constrn<string>("hello world"));
}
