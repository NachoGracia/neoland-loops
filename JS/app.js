//! iteración 1

/*Haz un bucle y muestra por consola todos aquellos valores del array 
que incluyan la palabra "Camiseta". Usa la función .includes de javascript.*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let ropa of products){
    console.log(ropa.includes("Camiseta"));
} //Hay que hacer referencia a la nueva variable creada, en este caso ropa


for (let i = 0; i < products.length; i++){
    console.log(products[i].includes("Camiseta"));
} // Y en este caso igual, a la variable i

products.forEach(element => {
    console.log(element.includes("Camiseta"));
}); // aqui hay que hacer ref a element, que será como recorre el array





