/* Alphabet Soup, sort the letters of your word alphabetically with Array,
Output: String */
var str="challange"; //aaecghlln - string expression

function AlphabetSoup(str){
   
        var word=Array.from(str);
        var soup=word.sort();
        var order=soup.toString();
        var output="";

        for(var i=0;i<order.length;i++)
        {
            if(order[i]!=",")
            {
                output=output+order[i];
            }
        }
    return output;
}