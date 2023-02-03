var flag = true;
console.log("Value assigned to flag is " + flag);
var n = 5;
console.log("Number is " + n);
var color = "blue";
console.log("The colour is " + color);
var list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log("Numbers are " + list);
}
var x;
x = ["hello", 10];
console.log(x[0].substring(2));
function string_length(value) {
    return value.length;
}
console.log("the lenght of the string is " + string_length("test 1"));
function string1(value) {
    return value.replace(" ", "").length;
}
console.log("the lenght of the string is " + string1("test 1"));
function both_methods(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(" ", "").length;
    }
}
console.log("the lenght of the string is " + both_methods("test 1", true));
