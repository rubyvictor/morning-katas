const arabicRoman = input => {
  //   switch (input) {
  //       case 1:"I"
  //         return "I"
  //         break
  //       case 2:"II"
  //         return "II"
  //         break
  //       case 3:"III"
  //         return "III"
  //         break
  //       default:
  //         break
  //   }

  const mapInput = {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      10: 'X'
    };
    if (input === 6) {
      return mapInput[5]+mapInput[1];
    } else if (input === 7){
        return mapInput[5]+mapInput[2]
    } else if (input === 8){
        return mapInput[5]+mapInput[3]
    } else if (input === 9){
        return mapInput[1]+mapInput[10]
    } else if (input === 11){
        return mapInput[10]+mapInput[1]
    }
    console.log(mapInput[5])

    return mapInput[input];
};


module.exports = arabicRoman;
