function pickRandomNumber() {
  let range = document.getElementById('range-input').value;
  //  Use a default value if input box is left blank
  if (!range) {
    range = 2;
    document.getElementById('range-input').value = range;
  }
  range = parseInt(range);
  const randomPick = Math.floor(Math.random() * range) + 1;
  document.getElementById('picked-number-container').style.display = 'block';
  document.getElementById('random-pick').innerHTML = randomPick;
}
