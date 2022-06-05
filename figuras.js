// Código del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();
// Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// )

const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, baseTriangulo) {
    return (Number(lado1) + Number(lado2) + Number(baseTriangulo));
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function perimetroTrianguloI(lado1, lado2, base) {
    if (lado1==lado2) {
        return (lado1*2) + base;
    }
    else if (lado1==base) {
        return (lado1*2) + lado2;
    }
    else if (lado2==base) {
        return (lado2*2) + base;
    }
}

function areaTriangulo(base, altura){
    return (base * altura) /2;
} 
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

function alturaTrianguloI(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles')
        return Math.sqrt((lado1**2) - (base**2/ 4));
    }
    else{
        alert('no lo se')
    }
}

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio){
    return radio*2;
}
// console.log("El diamétro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
// console.log("PI es: " + PI);
// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

// Área
function areaCirculo(radio) {
    return(radio*radio) * PI;
}
// const areaCirculo = radioCirculo*radioCirculo * PI;
// console.log("El área del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

// Aquí interactuamos con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("InputTrianguloBase");
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("InputTrianguloBase");
    const base = input3.value;

    const area = areaTriangulo(lado1, lado2, base);
    alert(area);
}

function calcularPerimetroCirculo (){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}
function calcularAreaCirculo (){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area)
}

function calcularPerimetroTrianguloI() {
    const input1 = document.getElementById("InputTrianguloILado1");
    const lado1 = parseInt(input1.value);

    const input2 = document.getElementById("InputTrianguloILado2");
    const lado2 = parseInt(input2.value);

    const input3 = document.getElementById("InputTrianguloIBase");
    const base = parseInt(input3.value);

    const perimetro = perimetroTrianguloI(lado1, lado2, base);
    alert(perimetro);
}
function calcularAlturaTrianguloI() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const lado1 = Number(input1.value);

    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = Number(input2.value);

    const input3 = document.getElementById("InputTrianguloBase");
    const base = Number(input3.value);

    if(lado1 === lado2 && lado1 != base){
        alert('isoceles')
         const altura = Math.sqrt((lado1**2) - (base**2/ 4));
         return altura;
    }
    else{
        alert('no lo se')
    }
}
    // alert(altura);