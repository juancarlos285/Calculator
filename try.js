let num = [1, 2, 3, 4, '+', 4]

if(Number.isInteger(num[num.length -1])) {
    num.pop()
}

console.log(num)