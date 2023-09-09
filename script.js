// Función para obtener info de la api
async function getJoke() {
    try {
        var response = await fetch('https://v2.jokeapi.dev/joke/Any?lang=es');
        var data = await response.json();

        if (data.type === 'single') {
            document.getElementById('chiste').textContent = data.joke;
        } else if (data.type === 'twopart') {
            document.getElementById('chiste').textContent = `${data.setup} ${data.delivery}`;
        } else {
            document.getElementById('chiste').textContent = 'No hay ningún chiste por el moemnto.';
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llama a la función para cargar un chiste cuando la página se carga
window.addEventListener('load', getJoke);


document.getElementById('get-joke-btn').addEventListener('click', getJoke);
