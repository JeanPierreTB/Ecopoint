import { URL } from "../URL/URL";
import { Alert } from 'react-native';


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

    async islogin(navigation:any):Promise<void>{
        await fetch("http://192.168.0.179:3001/verificar-usuario", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: this.nombre,
            contrasena: this.contraseña,
        }),
        })
      .then(response => response.json())
      .then(data => {
        if(data.res)
            navigation.navigate('principal');
        
        else
            Alert.alert('Error',data.mensaje);
        
        
      })
      .catch(error => console.error('Error:', error))}


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




}


export default Usuario