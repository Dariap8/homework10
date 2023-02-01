export class Reader {
  inputToHTML() {
    let tagName = document.getElementById("tagName").value;
    let attributeName = document.getElementById("attributeName").value;
    let attributeContent = document.getElementById("attributeContent").value;
    let tagText = document.getElementById("tagText").value;

    let htmlObject = new Render(
      tagName,
      attributeName,
      attributeContent,
      tagText
    );
    htmlObject.add2html();
  }
}
