// ОСТАТОЧНЫЕ ПАРАМЕТРЫ VS ОПЕРАТОР РАСШИРЕНИЯ
// ОСТАТОЧНЫЕ ПАРАМЕТРЫ ПОЗВОЛЯЮТ Ф-ЦИИ ПРИНИМАТЬ ЛЮБОЕ К-ВО АРГУМЕНТОВ И СОБИРАЕТ ИХ В МАССИВ
function sumNumbs (...args){
    let sum = 0;
    for (let arg of args)
    {sum += arg}
    return sum
}
console.log(`First result: ${sumNumbs(1, 2, 5, 7)}`,
    `Second result: ${sumNumbs(3,4, 7, 9)}`
)
//ОПЕРАТОР РАСШИРЕНИЯ РАЗБИРАЕТ МАССИВ НА ЭЛЕМЕНТЫ
const arr = [2, -171, 7, 8, 333, 987, -5, 6, 4, 8]
const findMax = Math.max(...arr)
console.log(`Max: ${findMax}`)
const findMin = Math.min(...arr)
console.log(`Min: ${findMin}`)
const max2 = arr.sort((a, b) => b - a)[0]
const findSumOdd = arr.reduce((acc, item) => {
    if(item % 2 === 0 && item > 0){
        return  acc += item
    } return acc
}, 0)

// console.log(max2, findSumOdd)
const max3 = arr.map((value, index) => ({value,index})).sort((a, b) => b.value - a.value
)
const maxFind = max3[0]
console.log(maxFind.value)
const findMaxAgain = arr.reduce((acc, currentValue) =>{
    return acc > currentValue ? acc : currentValue
    }, [0]
)
const findMinAgain = arr.reduce((acc, currentValue) =>{
       return acc < currentValue ? acc : currentValue
    }, [0]
)
console.log(findMinAgain)