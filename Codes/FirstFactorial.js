/* First factorial, find factorial
 */
var num=8;
function FirstFactorial(num){
    var output=1;

    for(var i=num;i>0;i--)
    {
        output=output*i;
    }
    return output;
}