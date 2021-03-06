// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.

export function sum(...nums: Array<any>): number {
    //...здесь пишем код.

    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((acc, el) => acc + el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    if (a + b >= c && b + c >= a && a + c >= b) {
        if (a === b && c === b) {
            return "10"
        } else if (a === b || a === c || c === b) {
            return "01"
        } else {
            return "11"
        }
    } else {
        return "00"
    }
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    let n = number
    let sum = 0;

    while (n > 0) {
        sum += n % 10
        n = Math.floor(n / 10)
    }
    return sum
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    let ch = 0;
    let nch = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            ch += arr[i];
        } else {
            nch += arr[i];
        }
    }
    return ch > nch
    // В return стоит "заглушка", чтоб typescript не ругался
}

/*export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    const sumOdd = arr.reduce((acc, item, index) => {
        if (index % 2 !== 0) acc += item;
        return acc;
    }, 0);
    const sumEven = arr.reduce((acc, item, index) => {
        if (index % 2 === 0) acc += item;
        return acc;
    }, 0);
    return sumEven > sumOdd
}*/


// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    //...здесь пишем код.
    return areaSq >= areaCr / Math.PI * 4
}

// В return стоит "заглушка", чтоб typescript не ругался


// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const result = [];
    if (amountOfMoney > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            let note = banknotes[i];
            while (amountOfMoney - note >= 0) {
                amountOfMoney -= note;
                result.push(note);
            }
        }
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}