/* Palindrom Challange, If the word is a palindrome, write it incorrectly if not correct.
ex.
input:"eye"
output: "True"

input:"never Odd or even"
output: "True"
*/

var str="never Odd or even"

function Palindrome (str) {
    var reverse=""
    var String=""

    for(var i=0; i<str.length; i++)
    {
        if(str[i]!=" ")
        {
            string+=str[i]
        }
    }
    
    var uppercase=string.toUpperCase()

    for(var i=uppercase.length-1;i>=0;i--)
    {
        reverse+=uppercase[i]
    }

    if(string==reverse)
    {
        return true
    }
    else {return false}
}