import elementInViewport from "./elementInViewport";
import hasClass from "./hasClass";

/* 
  Functionality:
  - In HTML, define the conf in an attribute called data-srvl-conf=""
  - In CSS, select classes with .sr-rvl[data-srvl-conf~="fade-in"] {opacity: 0.8} 
  - In JS, Just add a class(.animated) when the element is to be animated

  Features
  - Add checking and using the predefined values and adding/changing them
  - Define defaults for a group of elements
  - added delay and offset as data-srvl-* attr
*/

function animateElem(_elem) {
  var animatedCls = "animated";

  // add the animate class
  _elem.classList.add(animatedCls);
}

function runScrollReveal(_SrvlElems) {
  var animatedCls = "animated";

  for (var i = 0; i < _SrvlElems.length; i++) {
    var _srvlElem = _SrvlElems[i];
    var revealOffset = window.innerHeight * _srvlElem.offset / 100;

    if (elementInViewport(_srvlElem.elem, revealOffset)) {
      if (!hasClass(_srvlElem.elem, animatedCls)) {
        // animate the main elem
        animateElem(_srvlElem.elem);
        // animate the chained elems
        if (_srvlElem.chained) {
          _srvlElem.chained.map(function(chainedElem) {
            animateElem(chainedElem);
          });
        }
      }
    }
  }
}

var SrvlElems = document.querySelectorAll(".srvl");
var SrvlElemsList = [];
for (var i = 0; i < SrvlElems.length; i++) {
  var elem = SrvlElems[i];

  // set the offset value /*
  var offsetVal = 30;
  var customOffset = parseInt(elem.getAttribute("data-screen-offset"));
  if (customOffset) {
    offsetVal = customOffset <= 100 ? customOffset : offsetVal;
  }
  // set the offset value */

  var chainedElems = [];
  var chainSel = elem.getAttribute("data-srvl-chain");
  if (chainSel) {
    var chainedSels = chainSel.split(";");
    chainedSels.map(function(selector) {
      var el = document.querySelector(selector + ".srvl-chain");
      if (el) {
        chainedElems.push(el);
      }
    });
  }

  SrvlElemsList.push({
    elem: elem,
    offset: offsetVal,
    chained: chainedElems.length ? chainedElems : null
  });
}

// run on load
runScrollReveal(SrvlElemsList);
// run on scroll
document.onscroll = function() {
  runScrollReveal(SrvlElemsList);
};
