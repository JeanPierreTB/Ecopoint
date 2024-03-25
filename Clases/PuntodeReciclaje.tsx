import { Alert } from 'react-native';



interface Punto_Id{
  id:number;
  PuntoId:number;
  UsuarioId:number
}

interface response{
   mensaje:string,
   res:boolean,
   punto:Punto_Id|null
   
}

class PuntodeReciclaje{
    private latitud:number;
    private longitud:number;
    private lugar:string;
    private puntos:number;
    private id:number;


    constructor(id:number=0,latitud:number,longitud:number,lugar:string,puntos:number){
        this.latitud=latitud;
        this.longitud=longitud;
        this.lugar=lugar;
        this.puntos=puntos;
        this.id=id;
    }


    static async visualizarpuntos(): Promise<any[]> {
        try {
          const response = await fetch('http://192.168.0.179:3001/obtener-puntos');
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          //console.log("de la clase:", data.puntos);
          return data.puntos;
        } catch (error) {
          console.error("Ocurrió un error ", error);
          return [];
        }
      }

      static async realizarpunto(id_usuario:number,id:number,navigation:any):Promise<void>{
        try{
            console.log("esto no es una prueba",id_usuario,id);
            await fetch("http://192.168.0.179:3001/realizar-punto", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                idu:id_usuario,
                id:id
            }),
            })

        .then(response=>response.json())
        .then(data=>{
            if(data.res){
              Alert.alert('Exito', 'Punto registrado ha realizar', [
                {
                  text: 'OK',
                  onPress: () => {
                    // Usa reset para cargar la pantalla Principal desde cero
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'principal' }],
                    });
                  }
                }
              ]);
            }
            else
                Alert.alert('Error','Ocurrio un error en el servidor')
            

        })
        .catch(e=>console.error(`Ocurrio un error ${e}`))
        }catch(e){
            console.error("Ocurrio un error",e)
        }
      }

      static async obtenerpuntosarelizar(): Promise<any[]> {
        try {
          const response = await fetch('http://192.168.0.179:3001/obtener-punto-realizar');
          const data = await response.json();
      
          return data.puntos || []; // Devolver los puntos o un array vacío si no hay puntos
      
        } catch (e) {
          console.error("Ocurrió un error", e);
          return [];
        }
      }

      static async puntorealizado(punto: string,id:number): Promise<response> {
        try {
            const response = await fetch("http://192.168.0.179:3001/punto-cancelado", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lugar: punto,
                    id:id
                }),
            });
    
            const data = await response.json();
    
            return {
                mensaje: data.mensaje || "Mensaje predeterminado",
                res: data.res || false,
                punto: data.punto || null
            };
    
        } catch (e) {
            console.error("Ocurrió un error", e);
            return {
                mensaje: "Ocurrió un error",
                res: false,
                punto: null
            };
        }
    }

    async puntorealizadoqr(lugarseleccionado:string,id:number):Promise<any>{
      try{
        const response=await fetch('http://192.168.0.179:3001/punto-cancelado-qr',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              lugarseleccionado:lugarseleccionado,
              latitud:this.latitud,
              longitud:this.longitud,
              lugar:this.lugar,
              puntos:this.puntos,
              id:id
          }),
        })

        const data=await response.json();
        console.log(data);
        return data;
      }catch(e){
        console.log("Ocurrio un error",e)
      }
      
    }
    
      


    getlugar():string{
        return this.lugar
    }

    getpunto():number{
        return this.puntos
    }

    getid():number{
        return this.id
    }

    getlatitud():number{
        return this.latitud
    }

    getlongitud():number{
        return this.longitud
    }
      


}

export default PuntodeReciclaje;