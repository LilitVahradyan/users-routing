var numbers = [ 1, 2, 3, 4, 5, 6];

function square(value){
    let result = value * value;
    document.write("Square " + value + " is " + result + "." + "<br>");
}

numbers.forEach(square);