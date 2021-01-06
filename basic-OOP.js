const mobil ={
    name: "Toyota Avanza",
    weight: 800,
    model: "MPV",
    color: "putih",
    start: function(){
      console.log(`${this.name} telah menyala`);
    },
    drive: function(){
      console.log(`${this['name']} berjalan`);
    },
    brake: function(){
        console.log("mobil melambat");
      },
    stop: function(){
        console.log("mobil berhenti");
      },
  };

  //set data baru
  mobil.name="Honda Jazz";
  console.log(mobil.name);