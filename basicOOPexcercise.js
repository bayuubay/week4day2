class Smartphone{
    constructor(name, RAM,color){
        this.name=name; //str
        this.RAM=RAM; //num
        this.color=color; //str
    }
    running(){
        console.log(
            `smartphone merek ${this.name} | RAM ${this.RAM} GB | warna ${this.color} sudah dinyalakan`
        );
    }
    changeColor(color){
        this.color=color;
    }
    changeName(name){
        this.name=name;
    }
    changeRAM(RAM){
        this.RAM=RAM;
    }
}

const smartphone=new Smartphone("iphone 12",6,"Grey")
const smartphone2=new Smartphone("samsung s20",12,"putih")
smartphone.changeName("Mi10")
smartphone.changeColor("BLACK")
smartphone.changeRAM(8);
smartphone.running();
// smartphone2.running();