import {restSum, sum} from "./tasks";


test("sum of two numbers", ()=>{
    //1. Test data
    const a: number = 10
    const b: number = 5
    //2. Выполнение тест кода
    const result= sum(a,b)
    //3. Проверка результата
    expect(result).toBe(15)
})


test("sum of several numbers", () => {
    const a: number = 10
    const b: number = 11
    const c: number = 13
    const d: number = 1
    const e: number = 100

    expect(restSum(a,b,c)).toBe(34)
    expect(restSum(b,c)).toBe(24)
    expect(restSum(a,b,c,d,e)).toBe(135)
    expect(restSum(b,c,d,e)).toBe(125)
})