
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
  alphaSet() {
    let rgbAlphaOutputNumber = document.getElementById('rgb-alpha-output-number');
    let rgbAlphaInputRange = document.getElementById('rgb-alpha-input-range');
    let alpha = ((rgbAlphaInputRange.value) / 100).toPrecision(2);
    rgbAlphaOutputNumber.innerHTML = alpha;
    this.colorSet(alpha)
  }
  ,
  colorSet(alphaParam = 1) {
    let rbgOutputColor = document.getElementById('rgb-output-color');
    let red = document.getElementById('rgb-red-input-range').value;
    let green = document.getElementById('rgb-green-input-range').value;
    let blue = document.getElementById('rgb-blue-input-range').value;
    let alpha= document.getElementById('rgb-alpha-input-range');
    alpha.value=alphaParam*100;
    rbgOutputColor.style.backgroundColor = `rgb(${red},${green},${blue},${alphaParam})`;
  }
  ,
  prepareRgb() {
    let rgbSelection = document.getElementById('rgb-selection');
    let rgbAlphaArea = document.getElementById('rgb-alpha-area');
    if (!rgbSelection.checked) { return; };
    // alert(rgbSelection.checked);
    rgbSelection.checked=true;
    rgbAlphaArea.style = 'display: none;';
    this.colorSet();
    document.getElementById('rgb-alpha-output-number').innerHTML='1.0';
  }
  ,
  prepareRgba() {
    let rgbaSelection = document.getElementById('rgba-selection');
    let rgbAlphaArea = document.getElementById('rgb-alpha-area');
    if (!rgbaSelection.checked) { return; }
    rgbaSelection.checked=true;
    rgbAlphaArea.style = 'display: inline-block;';
  }
}
