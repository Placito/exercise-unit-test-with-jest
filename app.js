// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 144.7;
    //return the dollar value
    return valueInYen;
}
// we declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.005;
    //return the dollar value
    return valueInPound;
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {
    fromDollarToYen: fromDollarToYen,
    fromYenToPound: fromYenToPound,
    fromEuroToDollar: fromEuroToDollar
  };