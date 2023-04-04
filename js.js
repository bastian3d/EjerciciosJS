/* MENOR */
function obtenerMenor(numeros) {
    let menor = Infinity;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] <= menor) {
            menor = numeros[i]
        }
    }
    return (menor);
}

console.log(obtenerMenor([5, 77, 99, 6, 2]))

/* SUMA */
function sumar(numeroSuma) {
    let resultado = "";

    for (let i = 0; i < numeroSuma.length; i++) {
        resultado = parseInt(resultado + numeroSuma[i])
    }
    return resultado;
}

console.log(sumar([5, 77, 99, 6, 2, 33]))

const contieneIndice = (numero, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            return true;
        }
    }
    return false;
}

console.log(contieneIndice(3, [5, 77, 99, 6, 2, 33]))
console.log(contieneIndice(5, [5, 77, 99, 6, 2, 33]))

function invertirCaso(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

console.log(invertirCaso('Sebastian'))


function gano(tragamonedas) {
    if (tragamonedas.length < 5) {
      return false;
    }
    
    for (let i = 1; i < 5; i++) {
      if (tragamonedas[i] !== tragamonedas[0]) {
        return false;
      }
    }
    
    return true;
  }
  
  let tragamonedas1 = ['!','#','$','%','&'];
  let tragamonedas2 = ['?','?','?','?','?'];
  
  console.log(gano(tragamonedas1)); 
  console.log(gano(tragamonedas2));

function invertirCaso(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

console.log(invertirCaso('Sebastian'))

/**ejercicio 5  */

const estarJuntos = (personajes) => {
    const frodo = personajes.indexOf('Frodo');
    const sam = personajes.indexOf('Sam');
    return sam - frodo === 1 || sam - frodo === -1;
}

console.log(estarJuntos(['Sam','Frodo', 'Legolas']));//true
console.log(estarJuntos(['Sam','Legolas', 'Frodo']));//false