const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let matchingKeypresses = []
function init() {
  // your code here

  document.body.addEventListener('keydown', function(event) {
    if (codes[matchingKeypresses.length] === event.key){
      matchingKeypresses.push(event.key)
    } else {
      matchingKeypresses = []
    }
  })
}
