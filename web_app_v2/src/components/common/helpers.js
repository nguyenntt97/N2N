export function getShortened(str, num = 15) {
  return str.length > num ? str.substring(0, num) + "..." : str;
}

export function toDateStr(ts) {
  let d = new Date(ts);
  return d.toISOString.slice(0, 10).replace(/-/g, "");
}
