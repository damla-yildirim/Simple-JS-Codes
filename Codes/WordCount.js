/* Word Count, find out how many words
 */
var str="Hello Earthling!"
function WordCount(str) { 

  var space=1;
  
    if(str=="")
    {
      space=0;
    }
    for(var i=0;i<str.length;i++)
    {
      if(str[i]==" ")
      {
        space++;
      }
    }  
    return space; 
  
  }