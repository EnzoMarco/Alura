let amigos = []; // Define this array outside the function to preserve its values between function calls

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');

    if (amigo.trim() === '') {
        // If input is empty, don't add anything
        return;
    }

    amigos.push(amigo); // Add the new friend to the array

    if (lista.textContent === '') {
        lista.textContent = amigo;
    } else {
        lista.textContent += ', ' + amigo;
    }

    document.getElementById('nome-amigo').value = ''; // Clear the input field
}

function embaralhar(arr) {
    for (let indice = arr.length - 1; indice > 0; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * (indice + 1));
        [arr[indice], arr[indiceAleatorio]] = [arr[indiceAleatorio], arr[indice]];
    }
}

function sortear() {
    embaralhar(amigos);
    let lista = document.getElementById('lista-amigos');
    lista.textContent = amigos.join(', '); // Update the displayed list with the shuffled array
}
let sorteio = document.getElementById('lista-sorteio');
for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}