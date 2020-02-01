export function getShortened(str, num = 30) {
  return str.length > 30 ? str.substring(0, num) + "..." : str;
}
