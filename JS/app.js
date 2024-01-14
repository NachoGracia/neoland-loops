//! iteración 1

/*Haz un bucle y muestra por consola todos aquellos valores del array 
que incluyan la palabra "Camiseta". Usa la función .includes de javascript.*/

//?-------------------------------------con arrow, for of y ternario

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
let sinCamiseta =[]
const quitarCamiseta =(array) =>{
for (let ropa of array){
    //console.log(ropa.includes("Camiseta")) esto devuelve true/false. Uso ternario y funcion para llevarlo a un array nuevo sinCamiseta
    ropa.includes("Camiseta")
    ? 'Contiene la palabra "Camiseta'
    : sinCamiseta.push(ropa)
}
return sinCamiseta;
}

const resultadoSinCamiseta = quitarCamiseta(products);
console.log("🚀 ~ resultadoSinCamiseta:", resultadoSinCamiseta)



//? ------------------------------------------con for, arrow e if:

let noTieneCamiseta = [];
const sacarCamisetas =(array) =>{
for (let i = 0; i < products.length; i++){
   // console.log(products[i].includes("Camiseta"));
   if (products[i].includes("Camiseta")) {
    noTieneCamiseta.push(products[i])
   }

   }
   return noTieneCamiseta;
} 

let resultadoSinCamisetaSegundo = sacarCamisetas(products);
console.log("🚀 ~ resultadoSinCamisetaSegundo:", resultadoSinCamisetaSegundo)



//! iteración 2

/*Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
Una vez lo tengas compruébalo con un console.log. */

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]


for (let notas of alumns){

if (notas.T1 + notas.T2 + notas.T3 >= 2){ //como true es 1 y false 0, podemos hacer esta suma para comparar
    alumns.finalCurso = 'Esta aprovado'
    console.log(notas.name + ': Esta aprovado')
}

}

//! iteracion 3

