export class Render {
  #tagName;
  #attributeName;
  #attributeContent;
  #tagText;
  constructor(
    inputTagName,
    inputAttributetName,
    inputAttributeContent,
    inputTagText
  ) {
    this.tagName = inputTagName;
    this.attributeName = inputAttributetName;
    this.attributeContent = inputAttributeContent;
    this.tagText = inputTagText;
  }
  add2html() {
    let newElement = document.createElement(this.#tagName);
    let newText = document.createTextNode(this.#tagText);
    newElement.setAttribute(this.#attributeName, this.#attributeContent);
    newElement.appendChild(newText);
  }
}
