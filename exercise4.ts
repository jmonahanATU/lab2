let flag: boolean = true;
    console.log("Value assigned to flag is " + flag);
    

let n:number = 5;
console.log("Number is " + n);

let color:string = "blue";
console.log("The colour is " + color);

let list: number[] = [1, 2, 3];

for(let i = 0; i < list.length; i++)
{
    console.log("Numbers are " + list);
}

let x: [string, number];
x = ["hello", 10];

console.log(x[0].substring(2));



function string_length(value:string):number{
    return value.length;
}

console.log("the lenght of the string is " + string_length("test 1"));

function string1(value:string):number{
    return value.replace(" ","").length;
}
console.log("the lenght of the string is " + string1("test 1"));


function both_methods(value:string, spaces:boolean):number{
    if(spaces){
        return value.length;
    }else{
        return value.replace(" ","").length
    }
}console.log("the lenght of the string is " + both_methods("test 1", true));