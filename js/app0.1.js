
var numero1 = ""; 
var numero2 = "";
var operando = "";
var resultado = 0;


function numeros (){
    
    var valor = this.id;
    hiceclick(valor);
    if(valor == "dividido"||valor == "por"||valor == "menos"|| valor == "mas" || valor == "igual" || valor == "raiz"){
        if(operando != ""){
            igual();
            numero1=resultado;
            numero2="";
            operando = this.id;
        }else{
            operando = this.id;
        }
        
        
    }else if(operando == ""){
        numero1=numero1+this.id;
        imprimir(numero1);
        console.log("añadiendo "+this.id+" al numero1");
    }else{
        numero2=numero2+this.id;
        imprimir(numero2);
        console.log("añadiendo "+this.id+" al numero2");
    }

}
function operar(operando, numero1, numero2){
    resultado = calculadora(numero1, numero2);
    switch(operando){
        case "mas":
            resultado.sumar();
        break;
        case "menos":
            resultado.restar();
        break;
        case "por": 
            resultado.multiplicar();
        break;
        case "dividido": 
            resultado.dividir();
        break;
    }
}
function calculadora(num1, num2){
    var resultado = 0;
    function actualizarResultado (nuevoResultado){
      resultado = nuevoResultado;
    };
    return {
      sumar: function(){
        var resultado = parseFloat(num1) + parseFloat(num2);
        actualizarResultado(resultado);
      },
      multiplicar: function(){
        var resultado = parseFloat(num1) * parseFloat(num2);
        actualizarResultado(resultado);
      },
      restar: function(){
        var resultado = parseFloat(num1) - parseFloat(num2);
        actualizarResultado(resultado);
      },
      dividir: function(){
        var resultado = parseFloat(num1)/parseFloat(num2);
        actualizarResultado(resultado);
      },
      resultado: function(){
        return resultado;
      }
    };
}
function borrar(){
    console.log('borrando todas las variables');
    numero1 = 0;
    numero2 = 0;
    operando = 0;
    resultado = 0;
    document.getElementById('display').textContent = "0";
}
function imprimir (numero){
    if(numero.length<8){
        document.getElementById('display').textContent= parseFloat(numero);
    }else{
        document.getElementById('display').textContent= "numero muy largo";
    }
}
function igual (){
    console.log("hice click en IGUAL");
    if(numero1 != 0 && numero2 != 0 && operando != ""){
        operar(operando, numero1, numero2);
        resultado = resultado.resultado();
        imprimir(resultado);
        console.log("el resultado impreso es: "+ resultado);
        return resultado;
    }else{
        console.log("falta algun elemento para poder realizar la operacion");
    }
}
function normalizar(){
    document.getElementById(this.id).style = "";
}
function hiceclick(valor){
    document.getElementById(valor).style="border: 2px solid transparent; border-radius: 15px;";
}

var valor = document.getElementsByClassName('tecla');
for(var i = 0; i<valor.length; i++){
    document.getElementById(valor[i].id).onclick = numeros;
    document.getElementById(valor[i].id).onmouseout = normalizar;
}
document.getElementById('on').onclick = borrar;
document.getElementById('igual').onclick = igual;
