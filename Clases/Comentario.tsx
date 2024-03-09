class Comentario{
    private des:string;
    private tipo:number
    constructor(des:string,tipo:number){
        this.des=des,
        this.tipo=tipo
    }

    async agregarcomentario(nombre:string,contrasena:string):Promise<boolean>{
        try{
            const response=await fetch("http://192.168.0.179:3001/realizar-comentario",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    nombre:nombre,
                    contrasena:contrasena,
                    des:this.des,
                    tipo:this.tipo
                })
            })
            if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data=await response.json()
            return data.res
        }catch(e){
           
            console.error("Error",e)
            return false;
        }
        
    }
}


export default Comentario;