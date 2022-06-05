// const precioOriginal = 100;
// const descuento = 15;

// function calcularPrecioConDescuento(precio, descuento) {
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

//     return precioConDescuento;
// }

// function onCLickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
// }

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });


const coupons = [
    "John_la_pigua",
    "Wasterra",
    "Retoperto"
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function calcularPrecioConDescuentoCupon(precio, descuento, cupon) {
    const porcentajePrecioConDescuentoCupon = 100 - descuento - cupon;
    const precioConDescuentoCupon = (precio * porcentajePrecioConDescuentoCupon)/100;
    // const precioConDescuentoCupon = precioConDescuento - cupon;

    return precioConDescuentoCupon;
}

function onCLickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    let descuento;

    // switch (couponValue) {
    //     case coupons[0]:
    //         descuento = 15;
    //         break;
    //     case coupons[1]:
    //         descuento = 30;
    //         break;
    //     case coupons[2]:
    //         descuento = 45;
    //         break;
    // }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

function onCLickButtonPriceCoupon() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    let cupon;

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + " no es válido");
     } else if (couponValue === "John_la_pigua") {
        cupon = 15;
     } else if (couponValue === "Wasterra") {
        cupon = 30;
     } else if (couponValue === "Retoperto") {
        cupon = 45;
     }

    const precioConDescuentoCupon = calcularPrecioConDescuentoCupon(priceValue, discountValue, cupon);

    const resultPC = document.getElementById("ResultPC");
    resultPC.innerText = "El precio de descuento con cupón son: $" + precioConDescuentoCupon;
}

// const coupons = [
//     {
//         name: "John_la_pigua",
//         discount: 15,
//     },
//     {
//         name: "Wasterra",
//         discount: 30,
//     },
//     {
//         name: "Retoperto",
//         discount: 25,
//     },
// ];

// function calcularPrecioConDescuentoCupon(precio, descuento) {
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

//     return precioConDescuento;
// }

// function onCLickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputCoupon = document.getElementById("InputCoupon");
//     const couponValue = inputCoupon.value;

//     const isCouponValueValid = function (coupon) {
//         return coupon.name === couponValue;
//     };
    
//     const userCoupon = coupons.find(isCouponValueValid);
    
//     if (!userCoupon) {
//         alert("El cupón " + couponValue + "no es válido");
//     } else {
//         const descuento = userCoupon.discount;
//         const precioConDescuento = calcularPrecioConDescuentoCupon(priceValue, descuento);
    
//         const resultP = document.getElementById("ResultP");
//         resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//     }
// }