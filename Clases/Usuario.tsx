import { URL } from "../URL/URL";
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



class Usuario{
    private nombre:string;
    private contraseña:string;
    private Dni?:number|null;
    private ntelefono?:number|null;

    constructor(nombre:string,contraseña:string,Dni:number|null=null,ntelefono:number|null=null) {
        this.nombre=nombre;
        this.contraseña=contraseña;
        this.Dni=Dni;
        this.ntelefono=ntelefono;
    }

    async islogin(navigation: any): Promise<void> {
        try {
          const response = await fetch("http://192.168.0.179:3001/verificar-usuario", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nombre: this.nombre,
              contrasena: this.contraseña,
            }),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
      
          if (data.res) {
            // Almacena información de sesión segura en AsyncStorage
            const userData = { nombre: this.nombre,contraseña:this.contraseña };
            AsyncStorage.setItem('usuario', JSON.stringify(userData));
            navigation.navigate('principal');
          } else {
            Alert.alert('Error', data.mensaje);
          }
        } catch (error) {
          console.error('Error:', error);
          // Manejo de errores
          Alert.alert('Error', 'Ocurrió un error al procesar la solicitud.');
        }
      }
      


    async changepassword(contranueva:string,navigation:any):Promise<void>{
        await fetch("http://192.168.0.179:3001/cambio_contra", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: this.nombre,
            contrasena: contranueva,
        }),
        })

        .then(response=>response.json())
        .then(data=>{
            if(data.res){
                Alert.alert('Exito','Contraseña cambiada exitosamente');
                navigation.navigate('sesion');
            }
            else
                Alert.alert('Error','Correo no encontrado')

        })
        .catch(e=>console.error(`Ocurrio un error ${e}`))
    }

    async register(navigation:any):Promise<void>{
        console.log(this.ntelefono);
        await fetch("http://192.168.0.179:3001/insertar-usuario", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: this.nombre,
            contrasena: this.contraseña,
            dni:this.Dni,
            ntelefono:this.ntelefono
        }),
        })

        .then(response=>response.json())
        .then(data=>{
            if(data.res){
                navigation.navigate('sesion');
                Alert.alert('Exito',data.mensaje);
            }
            else
                Alert.alert('Error',data.mensaje)
        })
        .catch(e=>console.error("Ocurrio un error ",e))
        
        
    }

    static async datosusuario(nombre:string,contrasena:string):Promise<any>{
      try{
        const response = await fetch("http://192.168.0.179:3001/obtener-usuario", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre:nombre,
                    contraseña:contrasena
                }),
            });
         const data=await response.json();
         
         return data.usuario
          
      }catch(e){
        console.error("Ocurrio un error",e)
      }
    }

    static async datosinformativos(nombre:string,contrasena:string):Promise<any>{
      try{
        const response = await fetch("http://192.168.0.179:3001/notas-usuario", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre:nombre,
                    contraseña:contrasena
                }),
            });
         const data=await response.json();
         
         return data
          
      }catch(e){
        console.error("Ocurrio un error",e)
      }
    }

    static async actualizarfoto(nombre:string,contrasena:string,foto:string):Promise<any>{
      const response=await fetch("http://192.168.0.179:3001/actualizar-foto", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre:nombre,
            contraseña:contrasena,
            foto:foto
        }),
    });

    const data=await response.json();
    return data
    }
    




}


export default Usuario