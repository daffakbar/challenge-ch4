let player = prompt("What do you choose batu, gunting atau kertas ");
const com = Math.random();

console.log(com);
if (com < 0.3) {
  //   console.log("Rock");
  com = "batu";
} else if (com > 0.3 && com < 0.7) {
  //   console.log("scisossor");\
  com = "gunting";
} else {
  //   console.log("Paper");
  com = "kertas";
}
console.log(com);
