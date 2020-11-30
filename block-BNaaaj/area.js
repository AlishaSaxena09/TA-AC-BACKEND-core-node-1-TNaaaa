function squareArea(a) {
    return a*a;
}
function rectangleArea(a,b){
    return a*b;
}
function circleArea(r){
    return Math.PI*r*r;
}

module.exports ={ squareArea, rectangleArea, circleArea}