export function sum(a: number, b: number) {
    return a + b
}

export function restSum(...numbers: Array<number>) {
    return numbers.reduce((acc, el) => acc + el)
}