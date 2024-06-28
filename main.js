
let rgb = {
  redSet() {
    let rgbRedOutputNumber = document.getElementById('rgb-red-output-number');
    let rgbRedInputRange = document.getElementById('rgb-red-input-range');
    rgbRedOutputNumber.innerHTML = rgbRedInputRange.value;
    rgb.colorSet();
  }
  ,
  greenSet() {
    let rgbGreenOutputNumber = document.getElementById('rgb-green-output-number');
    let rgbGreenInputRange = document.getElementById('rgb-green-input-range');
    rgbGreenOutputNumber.innerHTML = rgbGreenInputRange.value;
    rgb.colorSet();
  }
  ,
  blueSet() {
    let rgbBlueOutputNumber = document.getElementById('rgb-blue-output-number');
    let rgbBlueInputRange = document.getElementById('rgb-blue-input-range');
    rgbBlueOutputNumber.innerHTML = rgbBlueInputRange.value;
    rgb.colorSet();
  }
  ,
  colorSet(alpha=1) {
    let rbgOutputColor = document.getElementById('rgb-output-color');
    let red = document.getElementById('rgb-red-input-range').value;
    let green = document.getElementById('rgb-green-input-range').value;
    let blue = document.getElementById('rgb-blue-input-range').value;
    rbgOutputColor.style.backgroundColor = `rgb(${red},${green},${blue},${alpha})`;
  }
}
