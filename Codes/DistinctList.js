/* Disctinct List Challange,
ex.
input:"[0,-2,-2,5,5,5]"
output: "3"
*/
var arr=[0,-2,-2,5,5,5]

function DistinctList(arr) {

    let=duplicate=0

    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i]===arr[j] && i!==j)
            {
                duplicate++
                arr.splice(arr.indexOf(arr[i]), 1)
            }
        }
    }
    return duplicate
}