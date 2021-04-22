// ejecuta una funcion en cierto tiempo
// setTimeout(()=>{
//     console.log('Hola Mundo');
// },100);


//los callback son funciones que se mandan a otra funcion como argumento
const getUsuarioByID = (id) =>{
    
    const usuario = {
        id,
        nombre: 'Tatiana'
    }
    setTimeout(()=>{
        console.log(usuario)
    },1500)
}
getUsuarioByID(10, (usuario) => {
    console.log(usuario.id);+
    console.log(usuario.nombre);
});