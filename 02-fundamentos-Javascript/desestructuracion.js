const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido}`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeHeroe({nombre, apellido, poder}){

    nombre = 'Fernando';
    console.log(nombre, apellido, poder);
}

//imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];
//const h1 = heroes[0];
const [h1,h2,h3] = heroes;
console.log(h1);