// Add your functions here
function map(arr, fN){
  let r = []
  for (let i = 0; i < arr.length; i++ ) {
    r.push(fN(arr[i]))
  }
  return r
}

function reduce(arr, fN, start = 0){
  let ret = start ? start : arr[0]

  for (let i = start ? 0 : 1 ; i < arr.length; i++ ) {
    ret = fN(arr[i], ret)
  }
  return ret;
}
