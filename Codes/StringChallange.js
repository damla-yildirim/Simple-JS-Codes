/* String Challnge, convert to lowercase and convert special characters to "_"
ex.
input:"cats AND*Dogs-are Awesome"
output: "cats_and_dogs_are_awesome"
*/
var str="cats AND*Dogs-are Awesome"
function StringChallange(str){

let lowStr=str.toLowerCase()
let splitStr=lowStr.split(/[ *%+-]/)
let output=splitStr.toString().replace(/,/g,"_")

return output

}