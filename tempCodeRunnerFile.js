const elem = document.getElementById("element");
const code = document.getElementById("code");
const sliders = document.querySelectorAll(".sliders input");

sliders.forEach((slider) => slider.addEventListener("input", generateShadow));
function generateShadow() {
    const shadowParams = getShadowParams();
    const boxShadow = createBoxShadow(...shadowParams);
    applyShadow(elem, boxShadow);
    updateCode(boxShadow);

}

function getShadowParams() {
    const hShadow = parseInt(document.getElementById("h-shadow").
        value);
    const vShadow = parseInt(document.getElementById("v-shadow").
        value);
    const blurRadius = parseInt(document.getElementById("blur-radius").
        value);
    const spreadRadius = parseInt(document.getElementById("spread-radius").
        value);
    const shadowColor = document.getElementById("shadow-color").
        value;
    const shadowColorOpacity = parseFloat(document.getElementById("shadow-Color-Opacity").
        value.toFixed(1));

    const shadowInset = document.getElementById("shadow-inset").Checked;
    return [hShadow, vShadow, blurRadius, spreadRadius, shadowColor, shadowColorOpacity, shadowInset]

}

function createBoxShadow(hShadow, vShadow, blurRadius, spreadRadius, color, opacity, inset) {
    const shadow = inset ? "inset" : "";
    const rgbaColor = hexToRgba(color, opacity);
    return '${shadow} ${hShadow}px $(vShadow}px ${blurRadius}px ${spreadRadius}px $(rgbaColor}';
}

function hexToRgba(color, opacity) {              ///#ffee22
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);

    return 'rgba(${r}, ${g}, ${b}, ${opacity})';
}

function applyShadow(element, boxShadow) {
    element.style.boxShadow = boxShadow;
}

function updateCode(text) {
    code.textContent = 'box-shadow: ${text}';
}

window.onabortload = generateShadow;