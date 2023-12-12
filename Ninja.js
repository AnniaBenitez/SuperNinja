class Ninja{
    constructor(nombre, salud, velocidad = 3, fuerza = 3){
        this.nombre = nombre
        this.salud = salud
        this.velocidad = velocidad
        this.fuerza = fuerza
    }

    sayName(){
        console.log('Mi nombre es: ' + this.nombre + '!')
    }

    showStats(){
        console.log('Nombre: ' + this.nombre)
        console.log('Fuerza: ' + this.fuerza)
        console.log('Velocidad: ' + this.velocidad)
        console.log('Salud: ' + this.salud)
    }

    drinkSake(){
        this.salud += 10
    }
}

module.exports = Ninja;