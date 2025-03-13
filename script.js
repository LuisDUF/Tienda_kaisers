
function listar_pianos(a){
const instrumentos = {
    piano: [
        {name:"Grand piano", color:"Negro", cantidad: 4, precio: 1000000},
        {name:"Piano vertical",color: "Blanco", cantidad: 6, precio: 500000},
        {name:"Piano electrónico", color: "Cafe", cantidad: 3, precio: 3000}
      ],
      Guitarra: [
        {name:"Acustica", color:"Cafe", cantidad: 7, precio: 10000},
        {name:"Electrica",color: "Roja", cantidad: 5, precio: 20000},
        {name:"Electro acustica", color: "Cafe", cantidad: 4, precio: 15000}
      ],
      Flauta: [
        {name:"Pan", color:"Blanco", cantidad: 10, precio: 200},
        {name:"Transversal",color: "Negro", cantidad: 5, precio: 2000},
        {name:"Pan", color: "Cafe", cantidad: 3, precio: 500}
      ]
};

document.getElementById("cantidad").innerHTML = instrumentos.piano[a].cantidad;
document.getElementById("nombre").innerHTML = instrumentos.piano[a].name;
document.getElementById("precio").innerHTML = instrumentos.piano[a].precio;

}