export function filterSomeKeysOfObject(obj, includeKey) {
  const newObj = {};
  Object.keys(obj)
    .filter((key) => includeKey.includes(key))
    .forEach((key) => {
      newObj[key] = obj[key];
    });

  return newObj;
}
