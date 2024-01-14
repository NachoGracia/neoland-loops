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

//? Está bien el ejercicio?

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

/*Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

Puedes usar este array:*/

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let destinos of placesToTravel) {
    console.log("🚀 ~ destinos:", destinos)
    
}

//! iteracion 4

// con for in

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (caracteristicas in alien){
console.log(caracteristicas + ': '+ alien[caracteristicas])
}

//! iteracion 5

/*Usa un bucle for para recorrer todos los destinos del array y elimina los elementos 
que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:*/

const sitiosViaje = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]


 
for (i=0; i<sitiosViaje.length; i++){

    (sitiosViaje[i]['id'] === 11 || sitiosViaje[i]['id'] === 40)
    ? delete sitiosViaje[i]
    : console.log(sitiosViaje[i]['name']);
   
}

//! iteracion 6

/*Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
 Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:*/

 const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    for (let personajes of toys){

        personajes['name'].includes("gato")
        ? delete personajes
        : console.log(personajes['name'])
    }
        
       
//! iteracion 7

/*Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan
 más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:*/

 const popularToys = [];
const juguetes = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for (let ventas of juguetes){

ventas['sellCount'] > 15
? popularToys.push(ventas['name'])
: null;



}

console.log(popularToys)