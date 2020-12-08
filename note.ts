let bool: boolean = true;
let num: number = 0xf00d;
let str: string = 'name';
let mlstr: string = `string`;
let not: void = null;
let not_2: void = undefined;
let mixed: number|boolean; // Позволит задавать два типа значений
let arrNum: number[] = [1, 2, 3];
let arrNum_2: Array<number> = [1, 2, 3];
let arrStr: string[] = ['s', 't', 'r'];
let arrStr_2: Array<string> = ['s', 't', 'r'];
let arrMix: (string|number)[] = []; // Теперь можно использовать 2 типа значений внутри массива.
let arrAny: any[] = [1, 'str', true]; // Создает массив самый обычный массив без типизации
let tupl: [string, number, boolean] = ['str', 12, true]; // Tuple имеет фиксированную длину и может иметь иметь разные типы элементов в зависимости от позиции.
let func: Function = () => {console.log('hello, world')};
let func_1: Function = (a: number, b: string, c: number | string = 10, d: boolean = false, i?: boolean) {}; // Параметры а и b обязательны и должны быть числом и строкой. Параметр с необезательный и по умолчанию задается 10, а так же должен быть строкой или числом. Параметр d должен быть булевым и необязательный, по умолчанию задается false. Параметр i необязательный.
let func_2 = (a: number, b: number): number => {}; // Это говорит о том что функция вернет тип number
let func_3: (a: number, b:number) => void; // Это подготовительный макет. То есть при создании функции с названием func_3 нужно писать так func_3 = (uid: number, age: number) {console.log(uid * number)};
let obj: object = {
    name: 'Farhad',
    wife: 'Ayten',
    daughter: 'Liza'
}

let obj_1: {    // Задать какие типы и сколько свойств будет у объекта
    name: string,
    age: number,
    married: boolean,
}

type StrOrNum = string | number;
type objWithName = {name: string, uid: StrOrNum};
function getUserLog(user: objWithName) {}; // Принимает объект user со свойствами name и uid;

let logDetail: (obj: {name: string, age: number}) => void; // По этому макету будет создана функция которая выглядит след образом. (user: {name: string, age: number}): void => {};







enum Num {zero, one, two};  // Тип enum - это более удобный способ задания понятных имен набору численных значений.
let num: Num = Num.zero;    // Result: 0;
let two: string = Num[2];   // Result: 'two'; // Возвращает название числа которое ты задавал.

enum Num_2 {five = 5, six, eleven = 11};
let num5: Num_2 = Num_2.five;   // Result: 5;
let num6: Num_2 = Num_2.six;    // Result: 6;
let num11: Num_2 = Num_2.eleven // Result: 11;
let five: string = Num[5];      // Result: 'five';

let rs: any = 'string'; // Тип any позволяет присвоить любой тип значения переменной 
rs = 1;
rs = true;

let non: void = null;   // Позволяет присвоить только null или undefined
let non_2: void = undefined;
function Name(): void {
    alert('Hello')
};

let some: any = 'Hello'; 
let numLn: number = (some as string).length; // Result: 5; // Type assertions (Приведение к типу). Приведение к типу не имеет никакого воздействия на этапе выполнения программы и используется только компилятором.

