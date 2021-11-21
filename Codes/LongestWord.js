/* Longest Word, find longest word with ascii
*/
var sen="I love you7895"//output: love
function LongestWord(sen) { 
  
    var keli="";
    
    for(var i=0;i<sen.length;i++)
      {
        if(sen.charCodeAt(i)>64&&sen.charCodeAt(i)<91||sen.charCodeAt(i)>96&&sen.charCodeAt(i)<123||sen[i]==" "||sen.charCodeAt(i)>47&&sen.charCodeAt(i)<58)
        {
           keli+=sen[i];
        }
      }
      var sp_kel=keli.split(' ');
      var longword="";
      for(var i=0;i<sp_kel.length;i++)
      {
        if(sp_kel[i].length>longword.length)
        {
          longword=sp_kel[i];
        }
      }
      
  
    return longword; 
  
  }