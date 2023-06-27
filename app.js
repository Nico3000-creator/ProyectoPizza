const input = document.querySelector("#id");
const bttn = document.querySelector("#bttn");
const nombre = document.querySelector("#nombre");
const precio = document.querySelector("#precio");
const ingredientes = document.querySelector("#ingredientes");

bttn.addEventListener('click', (e) => {
    e.preventDefault();
    let bandera = false
    precio.textContent = "";
    nombre.textContent = "";
    ingredientes.textContent = "";
    for (let i = 0; i < data.length; i++) {
        if(data[i].id == input.value) {
            bandera = true;
            // agregamos precio + nombre + ingredientes
            nombre.textContent = `Nombre: ${data[i].nombre}`;
            precio.textContent = `Precio: $${data[i].precio}`;
            ingredientes.textContent = `Ingredientes: ${data[i].ingredientes}`; 
        }
        (!bandera) ? precio.textContent = "Pizza no encontrada" : console.log("");
    }
})