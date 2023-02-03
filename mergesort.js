/* function mergeSort(a) {
  let array = a
  console.log(array)
  let len = array.length
  console.log(len)
  if (len===1){
    return [array[0]]
  } else if (len===2){
    if (array[0]<=array[1]) {
      let array_ = [array[0], array[1]]
      return array_
    } else {
      console.log('hola')
      let array_ = [array[1], array[0]]
      console.log((array_))
      return array_
    }
  } else {
    if (len%2===0) {
      let array1 = array.splice(len/2)
      return mergeSort(array1)
    }
  }
} */

function mergeSort(array) {
  let len = array.length
  if (len===1) {
    return array
  } else {
    let bottom = Math.ceil(len/2)
    let array2 = array.splice(bottom)
    array = mergeSort(array)
    array2 = mergeSort(array2)
    return sort(array, array2) 
  }
}

function sort(array1, array2) {
  let len1 = array1.length
  let len2 = array2.length
  let j = 0
  let i = 0
  let array = []
  while (i<=len1-1 && j<=len2-1) {
    if (array1[i]<=array2[j]) {
      array.push(array1[i])
      i++
    } else {
      array.push(array2[j])
      j++
    }
  }
  while (i<=len1-1) {
    array.push(array1[i])
    i++
  }
  while (j<=len2-1) {
    array.push(array2[j])
    j++
  }
  return array
}

/* console.log(sort([3], [2,5])) */
console.log(mergeSort([0,2,5,1,9,7,0,0])) 