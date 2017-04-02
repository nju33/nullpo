export default function nullpo(value) {
  if (Array.isArray(value)) {
    return value.filter(v => v);
  } else if (typeof value === 'object') {
    const targetKeys = Object.keys(value).filter(key => !value[key]);
    for (const key of targetKeys) {
      delete value[key];
    }
    return value;
  }
  return value;
}
