export default function hasClass(element, cls) {
  return (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
}
