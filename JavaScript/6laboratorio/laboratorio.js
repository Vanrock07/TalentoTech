class Empleado{

    constructor(id,nombre, cargo, tipoDocumento,numDocumento, tipoContrato,
            salario){

 //encapsulamiento de los atributos, solo se pueden acceder desde su propia clase
 // o haciendo uso de getters y setters
        this._id = id;
        this._nombre = nombre; 
        this._cargo = cargo;
        this._tipoDocumento = tipoDocumento;
        this._numDocumento = numDocumento;
        this._tipoContrato = tipoContrato;  
        this._salario = salario;     
        }

//creacion de metodos getter 
    get getId(){
        return this._id;
        }
    get getNombre(){
        return this._nombre;
    } 
    get getCargo(){
        return this._cargo;
    }
    get getTipoDocumento(){
        return this._tipoDocumento;
    }
    get getNumDocumento(){
        return this._numDocumento;
    } 
    get getTipoContrato(){
        return this._tipoContrato;
    }
    get getSalario(){
        return this._salario;
    }
  
  //creacion de metodos setter
        
    set setId(id){  
        this._id = id;
        }   
    set setNombre(nombre){
        this._nombre = nombre;
        }        
    set setCargo(cargo){
        this._cargo = cargo;  
        } 
    set setTipoDocumento(tipoDocumento){
        this._tipoDocumento = tipoDocumento;
        }        
    set setNumDocumento(numDocumento){
        this._numDocumento = numDocumento;
        } 
    set setTipoContrato(tipoContrato){
        this._tipoContrato = tipoContrato;
        }
    set setSalario(salario){
        this._salario = salario;
        }

    get getInformacion(){
        return `El empleado ${this._nombre}
                tiene el id ${this._id} 
                tiene el cargo ${this._cargo} 
                y tiene el tipo de documento ${this._tipoDocumento} 
                y el numero de documento ${this._numDocumento} 
                y el tipo de contrato es ${this._tipoContrato} 
                y el salario ${this._salario}`;
    }    
}

let empleado1 = new Empleado(1,"null","null","null","null","null","null");
let empleado2 = new Empleado(2,"null","null","null","null","null","null");

empleado1.setId = 1;
empleado1.setNombre = "Pedro Pascal";
empleado1.setCargo = "Desarrollador";
empleado1.setTipoDocumento = "DNI";
empleado1.setNumDocumento = "12345678";
empleado1.setTipoContrato = "Indefinido";
empleado1.setSalario = 1000;
console.log(empleado1.getInformacion);

