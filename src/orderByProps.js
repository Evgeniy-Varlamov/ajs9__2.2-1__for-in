
export default function orderByProps(obj, sortFields) {
  const result = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push({
        key,
        value: obj[key],
      });
    }
  }
  result.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });
  for (let i = sortFields.length - 1; i >= 0; i -= 1) {
    result.sort((a) => {
      if (a.key === sortFields[i]) {
        return -1;
      }
      return 0;
    });
  }
  return result;
}
