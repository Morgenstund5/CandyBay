import convertPrice from "./ConvertPrice"

function calcTotalPrice(array, priceBCH) {
    let price = 0
    for(let i = 0; i < array.length; i++){
        price += (convertPrice(array[i].price, priceBCH) * array[i].quantity)
    }
    return price.toFixed(4)
}

export default calcTotalPrice