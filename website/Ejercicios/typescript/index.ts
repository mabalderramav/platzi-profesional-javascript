// Boleand
let muted: boolean = true;
muted = false

//Number
let numerador: number = 8;
let denominador: number = 2;
let resultado: number = numerador / denominador;

//String
let helloWord: string = "Aldo";
helloWord = `hola ${helloWord}`

//Arrays
let people: string[] = [];
people = ["aldo","oscar","martin"];
people.push("30");

let peopleAndNumber: Array<string | number> = [];
peopleAndNumber.push("aldo");
peopleAndNumber.push(901);

//Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo",
}

let coloFavorito: Color = Color.Verde;
console.log(`Mi color favorito es ${coloFavorito}`);

//Any
let comodin: any = "aldo";
comodin = {
    type: "helki",
}

//Object
let someObject: object = {
    type: "helki",
}

console.log("hello typescript");

function add(a: number,b: number): number{
    return a + b;
}

let sum = add(2,3);
console.log(sum);

function createAdder(a: number): (number) => number{
    return function (b: number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName?: string): string{
    return `${firstName} ${lastName}`;
}

const richard = fullName('Aldo');
