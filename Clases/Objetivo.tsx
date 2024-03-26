class Objetivo{
    private des:string;
    private puntos:number;
    private dia:number;

    constructor(des:string,puntos:number,dia:number){
        this.des=des;
        this.puntos=puntos;
        this.dia=dia;
    }

    static async recuperarobjetivos():Promise<any[]>{
        try{
            const response=await fetch('http://192.168.0.179:3001/recuperar-objetivo')
            if(!response.ok) throw new Error('HTTP error! Status: ${response.status}')
            const data=await response.json();
            return data.objetivo;
        }catch(e){
            console.error("Ocurrió un error ", e);
            return [];
        }
    }

    async agregarobjetivo():Promise<any>{
        const response=await fetch('http://192.168.0.179:3001/agregar-objetivo',{
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   des:this.des,
                   puntos:this.puntos,
                   dia:this.dia
                   
                }),
        })

        const data=await response.json();
        return data;
    }
}

export default Objetivo;