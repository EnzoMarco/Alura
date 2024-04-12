// function testar(){
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    document.getElementById('texto').textContent = `Nome: ${nome}, Idade: ${idade}`;
// }
// testar();

document.getElementById('texto').textContent = 'Resultado:';

let frase = document.getElementById('quatro');
let parte = frase.split('e')[1];
console.log(parte);