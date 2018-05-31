function insertDash(num) {
  
  let arr = num.toString().split();
  for(let i = 0; i < arr.length; i ++) {
    if(parseInt(arr[i]) % 2 === 1 && parseInt(arr[i + 1]) === 1) {
      arr.splice(i + 1, 0, '-');
    }
    else {
      continue;
    }
    return arr.join();
  }
}

insertDash(12345);
