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

      static async realizarpunto(nom:string,contra:string,id:number,navigation:any):Promise<void>{
        try{
            await fetch("http://192.168.0.179:3001/realizar-punto", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                nombre:nom ,
                contrasena:contra,
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

      static async puntorealizado(punto: string,usuario:string,contrasena:string): Promise<response> {
        try {
            const response = await fetch("http://192.168.0.179:3001/punto-realizado", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lugar: punto,
                    usuario:usuario,
                    contrasena:contrasena
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