const Ninja = require('./Ninja');
class Sensei extends Ninja {
    constructor(nombre, salud = 200, velocidad = 10, fuerza = 10, sabiduria = 10){
        super(nombre, salud, velocidad, fuerza)
        this.sabiduria = sabiduria
    }

    speakWisdom(){
        super.drinkSake()
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom()
superSensei.showStats()

module.exports = Sensei;