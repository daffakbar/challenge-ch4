class Mobil {
  constructor(nama, bahanBakar) {
    // if (this.constructor === Mobil) {
    //   throw new Error("Tidak bisa membuat object dengan Kelas Abstract");
    // }

    this.nama = nama;
    this.bahanBakar = bahanBakar;
  }

  isi() {
    console.log("Mengisi bahan bakar");
  }
}

class Truk extends Mobil {
  constructor(nama, bahanBakar, bunyiKlakson) {
    super(nama, bahanBakar);
    this.bunyiKlakson = bunyiKlakson;
  }

  isi() {
    super.isi();
    console.log("Mengisi sampai penuh");
  }
  siapJalan() {
    console.log(
      `Mobil ${this.nama} dengan bahan bakar ${this.bahanBakar} bunyikan ${this.bunyiKlakson}, Jalaann!`
    );
  }
}

let fuso = new Truk("Fuso", "Dex", "Telolet");
fuso.isi();
fuso.siapJalan();

let bmw = new Mobil("BMW", "Pertamax");
