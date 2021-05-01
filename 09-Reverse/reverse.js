/**
 * Escribe una funcion llamada reverse que acepte un string.
 * Debe retornar el string a la inversa.

 * @param {String} str - esto es un string.
 * @returns {String} - deberia retornar un string.
 */

function reverse(str) {

    var arr = str.split('');
    console.log(arr);
    var reverse = arr.reverse();
    console.log(arr);
    var result= reverse.join(' ');
    console.log(result);

    return result;
}
//reverse ("Soy Yamila");

//Forma recursiva
/* function reverse(str) {
    if (str === "") return "";
  
    return reverse(str.substr(1)) + str.charAt(0);
  } */

  /* 
  First Part of the recursion method
  You need to remember that you won’t have just one call, you’ll have several nested calls
  
  !!!(the substr metod is equal to slice for a string, the metod charAt search the index in a string)!!!
  
  Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
  2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
  3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
  4th call – reverseString("lo")      will return   reverseString("o")              + "l"
  5th call – reverseString("o")       will return   reverseString("")               + "o"
  
  Second part of the recursion method
  The method hits the if condition and the most highly nested call returns immediately
  
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
*/