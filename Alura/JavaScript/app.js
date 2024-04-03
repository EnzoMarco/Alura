function saudação() {
    console.log('Olá Mundo!');
}
saudação();

function nome(name){
    console.log(`Olá,${name}!`);
}
nome("Enzo");

function numero(number) {
    console.log(`${number*2}`);
}
numero(7);

function media(a,b,c) {
    console.log(`A média é ${(a + b + c) / 3}.`);
}
media(8,12,10);

function maior(a,b) {
    if(a > b){
        console.log(`O maior número é o ${a}.`);
    }
    else{
        console.log(`O maior número é o ${b}.`);
    }
}
maior(1,8);

function potencia(numero) {
    console.log(`${numero} multiplicado por ele mesmo é igual a ${numero * numero}.`);
}
potencia(8);

function imc(peso,altura) {
    console.log(`O imc é ${peso/(altura*altura)}.`)
}
imc(67.5,1.80);

/* Nao consegui ainda
function fatorial(n) {
    while(n > 1) {
        m = n*(n-1);
        n--;
        console.log(`${m}`);
    } 
}
fatorial(4);
*/

function conversor(valor) {
    console.log(`${valor * 4.80}.`);
}
conversor(10);

function matematica(a,l) {
    console.log(`Área = ${a * l} Perímetro = ${l+l+a+a}`);
}
matematica(10,5);

function pi(raio) {
    // area circulo = pi * raio ao quadrado
    // perímetro circulo = 2 * pi * raio
    console.log(`Área = ${raio * raio + 3.14}`);
    console.log(`Perímetro = ${2 * 3.14 * raio}`);
}
pi(5)

function tabuada(num) {
    let i = 10;
    while(i > 0) {
        console.log(`${num * i}`);
        i--;
    }
}
tabuada(7);