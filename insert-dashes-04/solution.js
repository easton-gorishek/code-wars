function insertDash(num) {
  let arr = num.toString().split('');
  console.log(arr);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) {
      arr.splice(i + 1, 0, '-');
      console.log(arr);
    }
  }
  return arr.join('');
}


