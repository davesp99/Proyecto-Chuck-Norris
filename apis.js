// 1. SELECCIÓN DE ELEMENTOS: Se crean referencias a las etiquetas del HTML 
// para poder modificar su contenido o escuchar sus eventos.
const categoria = document.getElementById("categoria");
const chiste = document.getElementById("texto-chiste");
const iconChuck = document.getElementById("icon-chuck");
const boton = document.getElementById("btn-chiste");

// 2. ASIGNACIÓN DE EVENTO: Se configura el botón para que, cada vez que 
// el usuario haga clic, se ejecute la función de búsqueda de datos.
boton.addEventListener("click", obtenerChiste);

// 3. FUNCIÓN PRINCIPAL: Contiene la lógica para conectar con el servidor externo.
function obtenerChiste() {
    
    // 4. PETICIÓN A LA API: Se solicita un chiste aleatorio a la dirección web (URL). 
    // La respuesta se convierte a formato JSON para poder leer la información.
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        
        // 5. ACTUALIZACIÓN DEL DOM: Se toma la información recibida (data) 
        // y se inserta en el texto, la imagen y la categoría de la página.
        .then(data => {
            chiste.textContent = data.value;
            iconChuck.src = data.icon_url;

            // Se verifica si el chiste tiene etiquetas; de lo contrario, se pone un texto genérico.
            categoria.textContent = data.categories.length > 0
                ? `Categoría: ${data.categories[0]}`
                : "Categoría: sin categoría";
        })
        
        // 6. GESTIÓN DE ERRORES: Si la conexión falla o el servidor no responde, 
        // se captura el fallo para evitar que la aplicación deje de funcionar.
        .catch(error => console.error("Error detectado:", error));
}