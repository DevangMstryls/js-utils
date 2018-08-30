/**
 * @ref: 
 * Used: 
 * - https://codepen.io/vincentorback/pen/FCpBo
 * 
 * Others:
 * - https://jsfiddle.net/zpu16nen/
 * - https://embed.plnkr.co/plunk/29jeYo
 * - https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
 * - https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
 * - https://github.com/zengabor/zenscroll
 * 
 * NOTE: add in-transition class to body
 */

var targetOffset, currentPosition,
    body = document.body,
    animateTime = 900;

function getPageScroll() {
  var yScroll;

  if (window.pageYOffset) {
    yScroll = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {
    yScroll = document.body.scrollTop;
  }
  return yScroll;
}

function scrollToElem(selectors) {

  $(selectors[0]).click(function(e) {
    // TODO: Remove the usage of jQuery
    targetOffset = $(e.target.hash).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 700);
  });

  /* selectors.map(function (selector) {
    let elems = document.querySelectorAll(selector);
    elems.forEach(function(elem) {
      elem.addEventListener('click', function (event) {

        event.preventDefault();

        targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;

        currentPosition = getPageScroll();
      
        body.classList.add('in-transition');
        body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
        body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
        body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
      
        window.setTimeout(function () {
          body.classList.remove('in-transition');
          body.style.cssText = "";
          window.scrollTo(0, targetOffset);
        }, animateTime);
            
      }, false);
    });
  }); */
}

export default scrollToElem;