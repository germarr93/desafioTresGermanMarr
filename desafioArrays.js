//Array creado para Ventas y Reserva de instrumentos (ejercicios con propiedades, metodos y objetos)

//Imprimiendo el arreglo y la  posicion del arreglo.
const reservaInstrumentos = ["Bateria","Flauta","Trompeta","Violin"];
console.log(reservaInstrumentos[2]);
console.log(reservaInstrumentos[1]);

for(let i=0; i<reservaInstrumentos.length; i++)
{
    console.log(i + " " + reservaInstrumentos[i])
}

//Agregando elementos al arreglo de  2  formas.
reservaInstrumentos[4] = "Violonchelo";
console.log(reservaInstrumentos);

reservaInstrumentos.push('Guitarra electrica');
console.log(reservaInstrumentos);


//Mostrando el total de usuarios que hay en el array 
let userenBaseDatos = ['Juan','Jose Lopez','Rodrigo','Lorena','Santiago'];
let contador = 0;
for(let j=0; j<userenBaseDatos.length; j++)
{
    console.log('' + userenBaseDatos[j])
}

// Mostrando la suma del dinero Ganado en ventas de Instrumentos
let suma = 0;
let dineroGanadoMes =[1000,233,444,555,6666,7777]

for(let i=0; i<dineroGanadoMes.length; i++)
{
  suma += dineroGanadoMes[i];
}
console.log("" + suma);

//Eliminando el ultimo del indice en el arrayo userenBaseDatos
userenBaseDatos.pop()
console.log(userenBaseDatos);

/* Implementando array con objetos y imprimiendo con FOR OF */
const Jefes= [
    {
        id: 1,
        edad: 49, 
        nombre: 'Lorenzo'
    },
    {
        id: 2,
        edad: 70, 
        nombre: 'Jessica'
    },
    
]
console.log(Jefes)

for(let jefe of Jefes)
{
    console.log(Jefes);
}

/*IMPLEMENTACION DE UN CRUD(create,read,update,delete) construccion..


class Diario{
    constructor(id,nombreDiario,fecha)
    {
        this.id =id;
        this.nombreDiario = nombreDiario;
        this.fecha = fecha;
    }
}
const diarios = [];
mostrarMenu()

mostrarMenu = ()=>
{
    let opcion =0;


    while(opcion !==4)
    {
     opcion = Number(prompt(` Seleccionar opcion:
                          1. Agregar diario.
                          2. Modificar Noticia
                          3. Eliminar Noticia 
                          4. Salir`))

    switch( opcion)
    {
        case 1:
        {
            agregarDiario();
            break;
        }
        
        case 2:
         {
             modificarDiario()
         }
         break;
         case 3: 
         {
             eliminarDiario()
         }
         break;
    }
    
    function agregarDiario()
    {
        let id = prompt("ingresar id");
        let nombreDiario = prompt('ingresar nombre');
        let fecha = Number(prompt("ingrese year"))
        let noticiasNuevas = new noticiasNuevas(id,nombreDiario,fecha)
        noticiasNuevas.push(noticiasNuevas);
    }
                         
}
}

console.log(diarios);
*/