function fib(num) {
    if (num <= 0) return 0
    if (num === 1 || num === 2) return 1

    let left = fib(num - 1)
    let right = fib(num - 2)

    return left + right
}

console.log("fibonacci:", fib(5))