function palindrome(str: string) {
    let noAlfaNumeric = /[^a-zA-Z0-9]/g;
    str = (str.replace(noAlfaNumeric,'')).toLowerCase()
    let i = 0;
    let j = str.length-1;
    console.log(str);
    while(j > i){
      if(str[i] !== str[j]){
        return false;
      }
      j--;
      i++
    }
    return true;
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));