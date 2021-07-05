export const toJSONFix = (date: Date) => {
  const [m, d, y] = date.toLocaleDateString().split('/');
  const arr = [y, to2digits(+m), to2digits(+d)];
  return arr.join('-');
}

const to2digits = (num: number) => num < 10 ? '0' + num : num;