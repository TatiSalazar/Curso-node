const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


const getEmpleado = (id, callback) =>{

    const empleado = empleados.find((e)=> e.id ===id)?.nombre

    if(empleado){
        callback(null,empleado);
    } else {
        callback(`el empleado con ${id} no exite`);
    }
}

const getSalario = (id, callback) => {

    const salario = salarios.find((e)=> e.id ===id)?.salario;

    if(salario){
        callback(null,salario);
    } else {
        callback(`El empleado no existe`);
    }
}

getEmpleado(1,(err,empleado) => {
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    
getSalario(1,(err,salario) => {
    if(err){
        console.log('ERROR!!');
        return console.log(err);
    }
    console.log('Salario');
    console.log(salario,empleado);
})
})
