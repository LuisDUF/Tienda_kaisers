


    const watches = [
        {name:"Hamilton Jazzmaster", color:"Silver", cantidad: 4, precio: 24190, img: "rel1.png"},
        {name:"Day-Date 40",color: "Pink Gold", cantidad: 2, precio: 52800, img: "rel2.avif"},
        {name:"Oyster Perpetual 36", color: "Cafe", cantidad: 3, precio: 7050, img: "rel3.avif"}
    ];

window.onload = function listar_productos(){
    const tbody = document.getElementById("tabla-piano");

    let num = 0;

    watches.forEach(watch => {
        let fila = document.createElement("tr");
        

        fila.innerHTML = `
        <td><img src="${watch.img}"></td>
        <td>${watch.name}</td>
        <td id="can${num}">${watch.cantidad}</td>
        <td>${watch.precio}</td>
        <td id="tdd">
            <form onsubmit=" return comprar()" method="post">
            <input type="number" value="0" id="GET${num}">
            </form>
        </td>
        `;
        tbody.appendChild(fila);
        num++;
    })
}

function comprar() {
    let total = 0;
    let noMistakes = true;
    for (let i = 0; i < 3; i++) {
        if((document.getElementById("GET"+i).value) > watches[i].cantidad)
           noMistakes = false;
    }

    for (let i = 0; i < 3; i++) {
        if(noMistakes){
            total += Number(document.getElementById("GET"+i).value)*watches[i].precio;
            watches[i].cantidad -=  Number(document.getElementById("GET"+i).value);
            document.getElementById("can"+i).textContent = watches[i].cantidad;
            document.getElementById("pe").textContent = "Total: "+ total;
        }
        else{
            alert("Ingrese una cantidad disponible"); 
            i=3;
        }
        
    }
    
}