function rot13(str) {
    const decodedArray = str.split('').map(char => {
      const charCode = char.charCodeAt(0);
  
      if (/[A-Z]/.test(char)) {
        const decodedCharCode = charCode >= 78 ? charCode - 13 : charCode + 13;
        return String.fromCharCode(decodedCharCode);
      } else {
        return char;
      }
    });
  
    const decodedStr = decodedArray.join('');
    console.log(decodedStr);
    return decodedStr;
  }

rot13("SERR CVMMN!");