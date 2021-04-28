const axios = require('axios');
class Busquedas {

    historial = ['Tegucigalpa','Madrid','San Jose'];

    constructor(){
         //leerdb
    }

    get paramsMapbox(){

      return 
    }

    async ciudad(lugar=''){
         //peticion http
         
         //console.log('ciudad',lugar);
         try {
               // Peticion http
               const instance = axios.create({
                     baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                     params: {
                           'access-token':'pk.eyJ1IjoidGF0aWNoYW4iLCJhIjoiY2tvMGhtMmM0MGRtODJwb2lsZHI5bWo0MiJ9.AXNOx6_KsBHnhz3Y_XCh5Q',
                           'limit':5,
                           'language':'es' 
                     }
               });
               const resp = await instance.get();
               console.log(resp.data);

               return []; //retornar los lugares
         } catch (error) {
               return [];
         }
    }
}
module.exports = Busquedas;