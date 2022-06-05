// function calcularMediaAritmetica(lista) {
//   const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
//     return valorAcumulado + nuevoElemento;
//   });

//   const promedioLista = sumaLista / lista.length;

//   return promedioLista;
// }

// const lista = [100, 200, 500, 90, 40000];

// function calcularMediana(lista) {
//   const mitadLista = parseInt(lista.length / 2);

//   function esPar(numerito) {
//     if (numerito % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   let mediana;

//   if (esPar(lista.length)) {
//     const elemento1 = lista[mitadLista - 1];
//     const elemento2 = lista[mitadLista];

//     const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

//     return (mediana = promedioElemento1y2);
//   } else {
//     return (mediana = lista[mitadLista]);
//   }
// }


function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
  
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista = [100, 200, 500, 90, 40000];
  
  function calcularMediana(lista) {
    lista.sort((a, b) => a - b);
    const mitadLista = parseInt(lista.length / 2);
    
    function esPar(numerito) {
      if (numerito % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
  
    let mediana;
  
    if (esPar(lista.length)) {
      const elemento1 = lista[mitadLista - 1];
      const elemento2 = lista[mitadLista];
  
      const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
  
      return (mediana = promedioElemento1y2);
    } else {
      return (mediana = lista[mitadLista]);
    }
  }