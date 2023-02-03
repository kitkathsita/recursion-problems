let initialFibs = [0, 1] 

function fibs(n) {
  if (n === 1) {
    return [0]
  } else {
    for (let i = 0; i < n - 2; i++) {
      let a = initialFibs[i + 1] + initialFibs[i]
      initialFibs.push(a)
    }
    return initialFibs
  }
}

/* console.log(fibs(3)) */

function fibsRec(n) {
  if (n===1) {
    return [0]
  } else if (n===2){
    return [0,1]
  } else {
    return fibsRec(n-1).concat(fibsRec(n-1)[n-2]+fibsRec(n-1)[n-3])
  }
}

console.log(fibsRec(8))