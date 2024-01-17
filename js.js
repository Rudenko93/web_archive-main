const filterRange = (arr, min, max) => {
  let newArr = []
  for (let num of arr) {
    min <= num && num <= max ? num : newArr.push(num)
  }
  return newArr
}

let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

console.log(filtered) // 3,1 (совпадающие значения)

console.log(arr) // 5,3,8,1 (без изменений)
