// VARIABLES AND CONSTANTS
const scores = [elem('str'), elem('dex'), elem('con'), elem('intel'), elem('wis'), elem('cha')];
const baseMod = [elem('str-base'), elem('dex-base'), elem('con-base'),
  elem('intel-base'), elem('wis-base'), elem('cha-base')];
const newMod = [elem('str-new'), elem('dex-new'), elem('con-new'),
  elem('intel-new'), elem('wis-new'), elem('cha-new')];
var abilityScore = [0, 0, 0, 0, 0, 0];
var baseModScore = [0, 0, 0, 0, 0, 0];
var newModScore = [0, 0, 0, 0, 0, 0];

const setButton = elem('set');
const clearButton = elem('reset');

// Should there be a Firefox-only event for page reload to uncheck all boxes and empty all input fields?


// FUNCTIONS
function elem(x) {
  return document.getElementById(x);
}
// Calculating ability score modifier
function scoreMod(x) {
  return Math.floor((x - 10) / 2);
}


// BUTTONS AND CHECKBOXES
setButton.addEventListener('click', () => {
  for (let i = 0; i < scores.length; i++) {
    abilityScore[i] = scores[i].value;
    baseModScore[i] = scoreMod(abilityScore[i]);
    newModScore[i] = scoreMod(abilityScore[i]);
    //console.log(abilityScore[i]);
    //console.log(baseModScore[i]);
    baseMod[i].innerHTML = baseModScore[i];
  }
})

//
//For < input > elements with type = checkbox or type = radio, the input event should fire
//whenever a user toggles the control, per the HTML5 specification.
//

// For clearing all fields
clearButton.addEventListener('click', () => {
  for (let i = 0; i < scores.length; i++) {
    baseMod[i].innerHTML = '';
    newMod[i].innerHTML = '';
    baseModScore = 0;
    newModScore = 0;
  }
})