function pyramid() {
  const numLine = document.getElementById("numLine");
  const numLineVal = parseInt(numLine.value);
  const pyramidDiv = document.getElementById("pyramidDiv");
  var line = "";
  for (let i = 0; i < numLineVal; i++) {
    for (let j = 0; j <= i; j++) {
      line += "* ";
    }
    line += "\n";
    const p = document.createElement("p");
    p.innerHTML = `${line + "\n"}`;
    pyramidDiv.appendChild(p);
  }
  console.log(line + "\n");
}
