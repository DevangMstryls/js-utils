export default function getElementOffsets(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return { 
    top: top, 
    left: left 
  };
}