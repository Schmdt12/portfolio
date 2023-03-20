// console.log("Olá Mundo")

// const nome = "Manu"
// console.log("Declarando a variável nome:")
// console.log(nome)
// // n pode ser mudada em outro momento do código

// let idade = 17 
// console.log("Declarando a primeira variável idade:")
// console.log(idade)
// // pode ser mudado em outro momento 

// idade = 18
// console.log("Declarando a segunda variável idade:")
// console.log(idade)

// const idadeAluno = 20
// const nomeAluno = "Lucas"
// const triste = false

// console.log(idadeAluno)
// console.log(nomeAluno)
// console.log(triste)

// const pergunta = prompt("Qual o seu nome")
// console.log(pergunta)
// const sobrenome = prompt("Qual o seu sobrenome")
// console.log(sobrenome)
// const idadeEu = prompt("Qual a sua idade")
// console.log(idadeEu)
// const estudante = prompt("você é estudante")
// // console.log(estudante)

// if (estudante == "sim"){
//     console.log(true)
// }
// else (estudante == "não"){
//     console.log("false")
// }

// const numero = Number(prompt("digite um num:"))
// console.log(typeof numero)


// const valor1 = Number(prompt("digite um valor:"))
// const valor2 = Number(prompt("digite um segundo valor:"))
// number funciona para transformar string em int 
// const soma = valor1 + valor2
// console.log(soma)



// let nome =  String(prompt("qual seu nominho?"))
// const idade = String(prompt("quantos aninhos ce tem?"))

// console.log("Meu nome é", nome ,"e tenho", idade ,"anos")
// console.log("Meu nome é"+nome ,"e tenho"+idade ,"anos")
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
// const idade = 12
// console.log( typeof idade.toString())
// console.log(typeof idade)

// let frase = "ola bom dia fiu fiu"
// console.log(frase)
// console.log("-----------tamanho da frase-------------")
// console.log(frase.length)
// //lenght le o tamanho da frase
// console.log(frase.toUpperCase())
// console.log(frase.toLowerCase())
// console.log(frase.trim())

// console.log(frase.includes("ola"))

// console.log(frase.replace("fiu fiu", "fia fia"))
// console.log(frase.replaceAll("fiu", "oi"))

// alert("diz uma coisa")
//alert com um botaozinho de ok

//confirm("oi")
//alerta com botao de ok e cancelar

//and == &&
//or == ||

//exercicio sora, vogais se transformam vogais em i:

// let frase = prompt("fale uma frase pra virar I")
// let um = (frase.replaceAll("a","i"))
// let dois = (um.replaceAll("e","i"))
// let tres = (dois.replaceAll("o","i"))
// let quart = (tres.replaceAll("u","i"))

// console.log(frase)
// console.log (quart)

let teste = document.querySelector('p');
let botao = document.getElementById('botao');
let botao2 = document.getElementById('botao2');

botao.addEventListener('click', 
function(){
    window.location.href = 'vai.html';
})

botao2.addEventListener('click', 
function(){
    teste.textContent = 'Hello world';
})


