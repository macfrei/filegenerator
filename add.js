function add(a, b) {
  return Number(a) + Number(b)
}

const result = add(process.argv[2], process.argv[3])
console.log(result)
