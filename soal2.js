function checkTypeNumber(givenNumber) {
  if (givenNumber == undefined) {
    return "BRO WHERE IS THE PARAMETERS ?";
  } else if (typeof givenNumber !== "number" || isNaN(givenNumber)) {
    return "Invalid Data type";
  } else if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

//coba-coba
console.log(checkTypeNumber(true));
console.log(checkTypeNumber(5, 6, 8, 10));
console.log(checkTypeNumber());
