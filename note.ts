let bool: boolean = true;
let num: number = 0xf00d;
let str: string = 'name';
let mlstr: string = `string`;
let arrNum: number[] = [1, 2, 3];
let arrNum_2: Array<number> = [1, 2, 3];
let arrStr: string[] = ['s', 't', 'r'];
let arrStr_2: Array<string> = ['s', 't', 'r'];
let arrAny: any[] = [1, 'str', true]; // Создает массив самый обычный массив без типизации
let tupl: [string, number, boolean] = ['str', 12, true]; // Tuple имеет фиксированную длину и может иметь иметь разные типы элементов в зависимости от позиции.

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

