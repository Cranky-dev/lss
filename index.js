function color(selectorType, selectorValue, styleValue) {
  if (selectorType == "tag" || selectorType == "tagName") {
    const obj = document.getElementByTagName(selectorValue);
    obj.style.color(styleValue);
  }
  if (selectorType == "id" || selectorType == "tagId") {
    const obj = document.getElementById(selectorValue);
    obj.style.color(styleValue);
  }
  if (selectorType == "class" || selectorType == "tagClass") {

  }
}
