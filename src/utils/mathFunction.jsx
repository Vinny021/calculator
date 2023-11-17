function countDecimalPlaces(number) {
    const decimalIndex = number.toString().indexOf('.');
    return decimalIndex >= 0 ? number.toString().length - decimalIndex - 1 : 0;
}

export default countDecimalPlaces;