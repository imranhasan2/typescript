{
  function repatString(str: string, num: number) {
    // return str.repeat(num);
    if (num <= 0) return "";

    let result = "";

    for (let i = 0; i < num; i++) {
      result = result + str;
    }
    return result;
  }
  console.log(repatString("imran", 4));
}
