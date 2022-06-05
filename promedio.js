const lista = [
    100,
    200,
    300,
    500
];

// function calcularMediaAritmetica(lista) {
//     // let sumaLista = 0;

//     // for (let i = 0; i < lista.length; i++) {
//     // sumaLista = sumaLista + lista[i];
//     // }

//     const sumaLista = lista.reduce(
//         function (valorAcumulado = 0, nuevoElemento) {
//             return valorAcumulado + nuevoElemento;
//         }
//     );

//     const promedioLista = sumaLista / lista.length;

//     return promedioLista;
// }

function calcularMediGeometrica(lista) {
    productoLista = lista.reduce((a=0, b) => a * b);
    
    const promedioGLista = Math.pow(productoLista, 1/lista.length);
    return promedioGLista;
}

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;