function conversao(valorEmDolar){
   let resultadoDaConversao = valorEmDolar * 4.8;
   return resultadoDaConversao.toFixed(2);
}

let valorEmDolar = 50;
let resultadoDaConversao = conversao(valorEmDolar);
console.log(`${valorEmDolar} dolares é o equivalente a ${resultadoDaConversao} reais`);


function fatorial(n){
   if (n == 0 || n == 1){
      return 1;
   } else {
      let resultado = n;
      for(i = 1; i < n; i++)
      resultado = resultado * i;
   return resultado;
   }
}
console.log(fatorial(4));

function areaPerimetro(largura, altura){
   let area = largura * altura;
   let perimetro = (largura + altura) * 2;
   return `A area é ${area} e o perimetro é ${perimetro}`; 
}
console.log(areaPerimetro(8, 7)); 

function areaPerimetroCirculo(raio){
   let areaCirculo = Math.PI * raio * raio;
   let perimetroCirculo = 2 * Math.PI * raio;
   return `A area é ${areaCirculo.toFixed(2)} e o perimetro é ${perimetroCirculo.toFixed(2)}`;
}

console.log(areaPerimetroCirculo(7));

function tabuada(numero){
   for (i = 1; i <= 10; i++){
      let multiplicação = numero * i;
      console.log(multiplicação);
   }
}
tabuada(12);


let linguagensDeProgramacao = ['JavaScript', 'C++', 'C', 'Kotlin', 'Python'];
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

let nomes = ['joao', 'maria', 'jose'];
console.log(nomes[2]);