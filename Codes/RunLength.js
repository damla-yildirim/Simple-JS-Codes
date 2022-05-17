/* RunLength Challange, find how many of the same letter are in the variable
ex.
input:"aabbcde"
output: "2a2b1c1d1e"
*/

var str="wwwbbbw"
function RunLength(str){

    var output=""
    counter=1
    var letter=str[0]

    for(var i=1;i<str.length;i++)
    {
        if(str[i]===str[i-1])
        {
            counter++
            letter=str[i]
        }
        else
        {
            output=output+counter
            output=output+letter
            letter=str[i]
            counter=1
        }
        if(i===str.length-1)
        {
            output=output=counter
            output=output+letter
        }
    }
    return output
}