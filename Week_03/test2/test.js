const encording = (strlong)=>{
  let arr = [];
  for(let str of strlong){
    console.log(str);
    let codepoint = str.charCodeAt(0);
    console.log(codepoint);
    if(codepoint > 0x00 && codepoint <= 0x7f){
      arr.push(codepoint);
    } else if(codepoint > 0x80 && codepoint <= 0x7ff){
      arr.push(192 | (31 && (codepoint >> 6)));
      arr.push(128 | (63 && codepoint));
    } else if(codepoint > 0x800 && codepoint <= 0x7fff){
      arr.push(224 | (15 && (codepoint >> 12)));
      arr.push(128 | (63 && (codepoint >> 6)));
      arr.push(128 | (63 && codepoint));
    }  else if(codepoint > 0x10000 && codepoint <= 0x10ffff){
      arr.push(240 | (7 && (codepoint >> 18)));
      arr.push(128 | (63 && (codepoint >> 12)));
      arr.push(128 | (63 && (codepoint >> 6)));
      arr.push(128 | (63 && codepoint));
    }    
  }
  console.log(arr);
  let bitarr = [];
  for(let bit in arr){
    bitarr.push(bit.toString(2));
  }
  return bitarr;
}
console.log(encording("前端训练营"));