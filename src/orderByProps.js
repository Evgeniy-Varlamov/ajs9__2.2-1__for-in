
export default function orderByProps(obj, sortFields) {
  const arrObjs = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      arrObjs.push({
        key,
        value: obj[key],
      });
    }
  }
  for (let i = sortFields.length - 1; i >= 0; i -= 1) {
    arrObjs.sort((a) => {
      if (a.key === sortFields[i]) {
        return -1;
      }
      return 1;
    });
  }
  const arrObjsTemp = arrObjs.splice(sortFields.length);
  arrObjsTemp.sort((a, b) => {
    if (a.key > b.key) return 1;
    return -1;
  });
  const result = arrObjs.concat(arrObjsTemp);
  console.log(result);
  return result;
}
