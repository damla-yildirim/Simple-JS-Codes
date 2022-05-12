/* Swap Challange, convert lowercase letters to uppercase and uppercase letters to lowercase with ascii
ex.
input:"bEST fRIENDS fOREVER"
output: "Best Friends Forever"
*/

var str="bEST fRIENDS fOREVER"

function SwapI(str){

    var up=""
    var low=""

    for(var i=0;i<str.length;i++)
    {
        if(str[i].charCodeAt>65 && srt[i].charCodeAt<90)
        {
            up=str[i].toLowerCase()
        }
        else if (str[i].charCodeAt>97 && str[i].charCodeAt<122)
        {
            low=str[i].toUpperCase()
        }
    }
    return low;
}