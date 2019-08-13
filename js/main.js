// VARIABLES AND CONSTANTS
// [0 - Str, 1 - Dex, 2 - Con, 3 - Int, 4 - Wis, 5 - Cha]
const scores = [elem('str'), elem('dex'), elem('con'), elem('intel'), elem('wis'), elem('cha')];
const baseMod = [elem('str-base'), elem('dex-base'), elem('con-base'),
  elem('intel-base'), elem('wis-base'), elem('cha-base')];
const newMod = [elem('str-new'), elem('dex-new'), elem('con-new'),
  elem('intel-new'), elem('wis-new'), elem('cha-new')];
var abilityScore = [0, 0, 0, 0, 0, 0];
var baseModScore = [0, 0, 0, 0, 0, 0];
var newModScore = [0, 0, 0, 0, 0, 0];

const $eagle = $('#eagle');
const $fox = $('#fox');
const $righteous = $('#righteous');
const $grappled = $('#grappled');
const $fatigued = $('#fatigued');
const $nauseated = $('#nauseated');

const setButton = elem('set');
const clearButton = elem('reset');


// FUNCTIONS
// Formatting
function blankSpace() {
  for (i = 0; i < 6; i++) {
    baseMod[i].innerHTML = '&nbsp;';
    newMod[i].innerHTML = '&nbsp;';
  }
}
$(document).ready(blankSpace);

function elem(x) {
  return document.getElementById(x);
}
// Calculating ability score base modifier
function scoreMod(x) {
  return Math.floor((x - 10) / 2);
}


// BUTTONS AND CHECKBOXES
setButton.addEventListener('click', () => {
  $('input[type="checkbox"]').prop('checked', false);
  for (let i = 0; i < scores.length; i++) {
    abilityScore[i] = scores[i].value;
    baseModScore[i] = scoreMod(abilityScore[i]);
    newModScore[i] = scoreMod(abilityScore[i]);
    baseMod[i].innerHTML = baseModScore[i];
  }
})

// Eagle's Splendor
$eagle.click(() => {
  if ($eagle.prop('checked') == true) {
    newModScore[5] += 2;
  } else {
    newModScore[5] -= 2;
  }
  if (newModScore[5] != baseModScore[5]) {
    newMod[5].innerHTML = newModScore[5];
  } else {
    newMod[5].innerHTML = '&nbsp;';
  }
});

// Fox's Cunning
$fox.click(() => {
  if ($fox.prop('checked') == true) {
    newModScore[3] += 2;
  } else {
    newModScore[3] -= 2;
  }
  if (newModScore[3] != baseModScore[3]) {
    newMod[3].innerHTML = newModScore[3];
  } else {
    newMod[3].innerHTML = '&nbsp;';
  }
});

// Righteous Might
$righteous.click(() => {
  if ($righteous.prop('checked') == true) {
    newModScore[0] += 2;
    newModScore[1] -= 1;
    newModScore[2] += 2;
  } else {
    newModScore[0] -= 2;
    newModScore[1] += 1;
    newModScore[2] -= 2;
  }
  for (let i = 0; i < 3; i++) {
    if (newModScore[i] != baseModScore[i]) {
      newMod[i].innerHTML = newModScore[i];
    } else {
      newMod[i].innerHTML = '&nbsp;';
    }
  }
});

// Grappled
$grappled.click(() => {
  if ($grappled.prop('checked') == true) {
    newModScore[1] -= 2;
  } else {
    newModScore[1] += 2;
  }
  if (newModScore[1] != baseModScore[1]) {
    newMod[1].innerHTML = newModScore[1];
  } else {
    newMod[1].innerHTML = '&nbsp;';
  }
});

// Fatigued
$fatigued.click(() => {
  if ($fatigued.prop('checked') == true) {
    newModScore[0] -= 1;
    newModScore[1] -= 1;
  } else {
    newModScore[0] += 1;
    newModScore[1] += 1;
  }
  for (let i = 0; i < 2; i++) {
    if (newModScore[i] != baseModScore[i]) {
      newMod[i].innerHTML = newModScore[i];
    } else {
      newMod[i].innerHTML = '&nbsp;';
    }
  }
});

// Nauseated
$nauseated.click(() => {
  for (let i = 0; i < 6; i++) {
    if ($nauseated.prop('checked') == true) {
      newModScore[i] -= 1;
    } else {
      newModScore[i] += 1;
    }
    if (newModScore[i] != baseModScore[i]) {
      newMod[i].innerHTML = newModScore[i];
    } else {
      newMod[i].innerHTML = '&nbsp;';
    }
  }
});


// For clearing all fields
clearButton.addEventListener('click', () => {
  for (let i = 0; i < scores.length; i++) {
    baseMod[i].innerHTML = '&nbsp;';
    newMod[i].innerHTML = '&nbsp;';
    baseModScore[i] = 0;
    newModScore[i] = 0;
  }
})