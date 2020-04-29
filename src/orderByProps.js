export default function orderByProps(data, filters) {
  const array = [];
  filters.forEach((item) => {
    for (const i in data) {
      if ((Object.prototype.hasOwnProperty.call(data, i)) && (item === i)) {
        array.push({ key: i, value: data[i] });
      }
    }
  });
  Object.entries(data)
    .sort()
    .filter((item) => !filters.includes(item[0]))
    .forEach((item) => array.push(
      { key: item[0], value: item[1] },
    ));
  return array;
}
