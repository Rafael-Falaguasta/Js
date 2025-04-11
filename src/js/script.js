// DECLARAÇÃO E VARIAVEIS

var nome ="Fiap";
console.log(nome)

let idade =19
console.log(idade)

const sobrenome ="Fiapinho"
console.log(sobrenome)

//undefined

let exemplo;
console.log(exemplo)

//tipos de variaveis

let ex1 ="Fiap";
console.log(typeof ex1)

let ex2 =25
console.log(typeof ex2)


//CONVERSOES    

// FLOAT => STRING 

let numFloat =123.456
console.log(numFloat.toString())

//string => float

let numstring ="12.963"
console.log(parseFloat(numstring))

// int => string

let numint = 10
console.log(numint.toString())


let numString ="120"
console.log(parseInt(numString))

//METODOS   

//METODO LENGTH - VERIFICA O TAMANHO DA STRING

let frase ="O mundo da tecnologia"
console.log(frase.length)

//METODO indexof/lastindexOf -RETORNA UM TRECHO DO SEU CODIGO

let texto ="Programação sustentavel";
console.log(texto.indexOf("ão"))

//METODO SLICE = RETORNA PARTE DO TEXTO PASSANDO O INICIO E O FINAL

let info ="Programação de ponta";
console.log(info.slice(14,20))

//OPERADORES ARITIMETICOS

const a= 10;
const b= 20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//OPERADORES LOGICOS

const c = 20;
const d = 30;

console.log(c < d);
console.log(c < d && c < 10);
console.log(c > d || d > c)
console.log(c == d || d <= c )

//OPERADORES DE COMPARAÇÃO

const e= 10;
const f=30;

console.log( e == f )
console.log(e === f)
console.log(e!=f)


//CONDICIONAL


//if

if(true){
    console.log("é vdd")

}

let js = "1"
if(js ==1){
    console.log ("esta coreto")
}

let nome ="Fiap"

if(nome == "fiap"){
    console.log("nome correto")
}
else{
    console.log("NOME ERRADO")
}

//if encadeado ou aninhado

let Idade =13;
if(Idade <= 14){
    console.log("Não pode entrar")
}
else if(idade > 14 && Idade <18){
    console.log("Pode entrar")
}
else if(Idade > 18 && Idade <= 50){
    console.log("Perigo seus pais estão aqui")
}
else{
    console.log ("Volte para casa e va assistir netflix")

}

//swit case

let time = "Santos";
switch(time){
    case "Santos":
        console.log("Melhor Time")
        break;
    case "São Paulo":
        console.log("Não ganha nem em casa")
        break;


}

// Ternaio

let valor=100;
let resultado = valor ==100 ? "Valor Certo": "Valor Errado";
console.log(resultado); 

//Ternario 2

let valor2 = 6
let final = valor2 <= 6 ? "Passou": "Reprovado";
console.log(final);