export default function findChild(parent, elemClass) {
  var child = null;
  // console.log(parent);

  for (var i = 0; i < parent.children.length; i++) {
    var thisNode = parent.children[i];
    // console.log(thisNode);
    if (hasClass(thisNode, elemClass)) {
      child = thisNode;
      break;
    }
  }

  return child;
}

