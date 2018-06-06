function capitalize(s){
  let evenCaps = s.split('');
  let oddCaps = s.split('');
  
  for(let i = 0; i < evenCaps.length; i++) {
    if(i % 2 === 0) { evenCaps[i] = evenCaps[i].toUpperCase(); }
    else { oddCaps[i] = oddCaps[i].toUpperCase(); }
  }
  
  return [evenCaps.join(''), oddCaps.join('')];
};