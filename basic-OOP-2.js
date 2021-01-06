class Mobil{
    constructor(nama, warna, berat){
        this.name=nama;
        this.color=warna;
        this.weight=berat;
    }
    start(){
        console.log(
            `mobil ${this.name} | warnanya ${this.color} | berat ${this.weight} kg telah menyala`
        );
    }
    changeColor(warna)
}

const nama ="HRV";
const warna="hitam";
const berat=1000;

const mobil=new Mobil(nama, warna, berat);
