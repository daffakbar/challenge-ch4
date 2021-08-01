/*
LOGIKA GAME 
1. deklarasi var player ngambil dari dom queryselectorAll
2. deklarasi var komputer ngambil dari Math.floor(Math.random() * 3)
3. menentukan pilihan komputer gunting/batu/kertas (diambil dari mathRandom)
4. menentukan pilihan player gunting/batu/kertas (diambil dari dom queryselectorAll)
5. membandingkan pilhan komputer dan player dengan diberi kondisi if else
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
let iRandom = Math.floor(Math.random() * 3);

console.log(com);

console.log(iRandom);
for (let i = 0; i < player.length; i++) {
  let pickPlayer = "";
  // const element = array[i];
  player[i].addEventListener("click", () => {
    player[i].classList.toggle("selectedColor");
    com[iRandom].classList.add("selectedColor");

    pickPlayer = player[i].getAttribute("alt");

    console.log("player: " + pickPlayer);
    let pickCom = "";
    if (iRandom == 0) {
      pickCom = "batu";
    } else if (iRandom == 1) {
      pickCom = "kertas";
    } else {
      pickCom = "gunting";
    }
    console.log("com: " + pickCom);
    //
    console.log("========Result======== ");
    if (pickPlayer == "batu") {
      if (pickCom == "batu") {
        console.log("Seri");
      } else if (pickCom == "gunting") {
        console.log("Anda Menang");
      } else {
        console.log("Anda Kalah :");
      }
    }
    if (pickPlayer == "gunting") {
      if (pickCom == "batu") {
        console.log("Anda Kalah");
      } else if (pickCom == "gunting") {
        console.log("Seri");
      } else {
        console.log("Anda Menangg ");
      }
    }
    if (pickPlayer == "kertas") {
      if (pickCom == "batu") {
        console.log("Anda Menang");
      } else if (pickCom == "gunting") {
        console.log("Anda Kalah");
      } else {
        console.log("Serii ");
      }
    }
  });
  function restart() {
    let iRandom = Math.floor(Math.random() * 3);
    console.log(iRandom);
  }
}

// .getAttribute("alt")
