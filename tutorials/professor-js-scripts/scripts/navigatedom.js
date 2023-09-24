function logCells() {
  let divElem = document.getElementById("root");
  let tableElem = divElem.childNodes[1];
  let tbodyElem = tableElem.childNodes[1];
  let tdElems = tbodyElem.childNodes[0].childNodes;
  console.log(tdElems);
  tdElems.forEach(function(node) {
    if(node.nodeType == 1) {
      console.log(node.childNodes[0].nodeValue);
    }
  })
}
