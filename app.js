const secret = "aback";
const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
const alpha = new Set(letters.split(''));





window.addEventListener('keyup', logKey);

function logKey(evt) {
  console.log(evt);

  if(evt.key.toUpperCase() == "BACKSPACE") {
    console.log('submit');
  }

  if (evt.key.toUpperCase() == "BACKSPACE") {
    console.lot('deleting');
  }
     if (alpha.has(evt.key.toUpperCase())) {
       console.log(evt.key.toUpperCase());
      } else {
        console.log('not a letter');
      } 
}

const keyboard = [

  "QWERTYUIOP".split(''),
  "ASDFGHJKL".split (''),
  "ZXCVBNM".split('')
]
function render() {
  const main = document.querySelector('#root');
  let template = `<div class="keyboard">`;

  for (let i = 0; i<keyboard.length; i++) {
    template += `<div class="row">`
    for (let j=0; j<keyboard[i].length;j++){
      template += `<div class="key">${ keyboard [i][j] }</div>`
    }
    template += `</div>`
  }

  template += `</div>`

  main.innerHTML = template;

  console.log(main);

}

render()