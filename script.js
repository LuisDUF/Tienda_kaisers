


    const watches = [
        {name:"Hamilton Jazzmaster", color:"Silver", cantidad: 4, precio: 24190, img: "rel1.jpg"},
        {name:"Piano vertical",color: "Blanco", cantidad: 6, precio: 500000},
        {name:"Piano electrónico", color: "Cafe", cantidad: 3, precio: 3000}
    ];

window.onload = function listar_productos(){
    const tbody = document.getElementById("tabla-piano");
    const body = document.getElementById("cuerpo");

    watches.forEach(watche => {
        let fila = document.createElement("tr");

        fila.innerHTML = `
        <td><img src="${watche.img}"></td>
        <td>${watche.name}</td>
        <td>${watche.cantidad}</td>
        <td>${watche.precio}</td>
        `;
        tbody.appendChild(fila);


        let cucu = document.createElement("div");

        cucu.innerHTML = `
        <p>${watche.name}</p>
        `;
        

    })

    

document.addEventListener("DOMContentLoaded", listar_pianos);

}