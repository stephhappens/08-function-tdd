
 export default function (cardName) {
  //  if (cardName === '5') {
  //    return 5;
  //  }
  //  if (cardName === '9') {
  //    return 9;
  //  }
  //  if (cardName === '10') {
  //    return 10;
  //  }
   if (cardName === 'jack') {
     return 10;
   }
   if (cardName === 'queen') {
     return 10;
   }
   if (cardName === 'king') {
     return 10;
   }

   if (cardName === 'ace') {
     return 11;
   }
   else {
     return parseInt(cardName, 10); }
 }
