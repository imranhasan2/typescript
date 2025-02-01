{
  type Area = {
    height: string;
    width: string;
  };

  type newArea<P> = {
    [T in keyof P]: P[T];
  };

  const area: newArea<{ height: string; width: number }> = {
    height: "40",
    width: 50,
  };

  //

  type todo = {
    task: string;
    date: string;
  };

  // const newType: todo = {
  //   task: "work",
  // };

  type newtype = {
    [t in keyof todo]?: todo[t];
  };


  const todo:newtype={
    task:'ok'
  }
}
