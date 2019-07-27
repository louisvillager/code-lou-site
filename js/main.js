// VARIABLES AND CONSTANTS
const scores = [elem('str'), elem('dex'), elem('con'), elem('intel'), elem('wis'), elem('cha')];
const baseMod = [elem('str-mod-base'), elem('dex-mod-base'), elem('con-mod-base'),
  elem('intel-mod-base'), elem('wis-mod-base'), elem('cha-mod-base')];
const newMod = [elem('str-mod-new'), elem('dex-mod-new'), elem('con-mod-new'),
  elem('intel-mod-new'), elem('wis-mod-new'), elem('cha-mod-new')];
var abilityScore = [0, 0, 0, 0, 0, 0];
var baseModScore = [0, 0, 0, 0, 0, 0];
var newModScore = [0, 0, 0, 0, 0, 0];

const setButton = elem('set');
const clearButton = elem('reset');


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

// For clearing all fields
clearButton.addEventListener('click', () => {
  for (let i = 0; i < scores.length; i++) {
    baseMod[i].innerHTML = '';
    //newMod[i].innerHTML = '';
  }
})