/*
LOGIKA GAME 
1. deklarasi var player ngambil dari dom queryselectorAll V
2. deklarasi var komputer ngambil dari Math.floor(Math.random() * 3) V
3. menentukan pilihan komputer gunting/batu/kertas (diambil dari mathRandom) V
4. menentukan pilihan player gunting/batu/kertas (diambil dari dom queryselectorAll) V
5. membandingkan pilhan komputer dan player dengan diberi kondisi if else V
6. menampilkan hasil dari pilihan player vs komputer
7. reset
  7.1. mathrandom di panggil kembali (pilihan komputer) 
  7.2. menghapus background (pilihan komputer) 
  7.3. menghapus background (pilihan player)
  7.4. mengembalikan tampilan hasil ke VS (tampilan awal)
*/

let player = document.querySelectorAll("#player div img");
let com = document.querySelectorAll("#com div img");
console.log(player);
console.log(com);
function iRandom() {
  return Math.floor(Math.random() * 3);
}

let randNum = iRandom();
console.log(randNum);
for (let i = 0; i < player.length; i++) {
  let pickPlayer = "";
  player[i].addEventListener("click", () => {
    player[i].classList.toggle("selectedColor");
    com[randNum].classList.add("selectedColor");
    // let valuePlayer = playerp[i]
    pickPlayer = player[i].getAttribute("alt");

    console.log("player: " + pickPlayer);
    let pickCom = "";
    if (randNum == 0) {
      pickCom = "batu";
    } else if (randNum == 1) {
      pickCom = "kertas";
    } else {
      pickCom = "gunting";
    }
    console.log("com: " + pickCom);
    //
    console.log("========Result======== ");

    let hasil = Result(pickPlayer, pickCom);
    console.log(hasil);
    outputResult(hasil);
  });
}
// 5
function Result(pickPlayer, pickCom) {
  let hasil = "";
  if (pickPlayer == "batu") {
    if (pickCom == "batu") {
      hasil = "seri";
    } else if (pickCom == "gunting") {
      hasil = "menang";
    } else {
      hasil = "kalah";
    }
  }
  if (pickPlayer == "gunting") {
    if (pickCom == "batu") {
      hasil = "kalah";
    } else if (pickCom == "gunting") {
      hasil = "seri";
    } else {
      hasil = "menang";
    }
  }
  if (pickPlayer == "kertas") {
    if (pickCom == "batu") {
      hasil = "menang";
    } else if (pickCom == "gunting") {
      hasil = "kalah";
    } else {
      hasil = "seri";
    }
  }
  return hasil;
}
let output = document.querySelectorAll("#output div");
let iOutput;
function outputResult(hasil) {
  for (let i = 0; i < output.length; i++) {
    if (output[i].classList.contains(hasil)) {
      iOutput = i;
      output[0].classList.add("visually-hidden");
      output[i].classList.remove("visually-hidden");
    }
  }
}
const btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", () => {
  randNum = iRandom();
  player.forEach((element) => {
    element.classList.remove("selectedColor");
  });
  com.forEach((element) => {
    element.classList.remove("selectedColor");
  });
  output[0].classList.remove("visually-hidden");
  output[iOutput].classList.add("visually-hidden");
});

console.log(btnReset);

// .getAttribute("alt")
