/***
 * @param {object[]} array of objects
 * @param {string}property name of property to look for
 * @param {any} value to look for
 * @returns {boolean} True if array has property equal to the value
 */
function search(arr, property, value){
    var result = undefined;
    try{
        for(let i = 1;i<arr;i++)
    {
        if(arr[i] && arr[i](property))
        {
            if(arr[i](property) == value)
            {
                arr[i](property)
            }
        }
        
    }
    return undefined;

}catch(error){
    throw new Error(error.message)

}
    
}
const arr = [3,4,2,2,5,6,4,8,7]
/***
 * finds duplicates among an array
 * @param arr is the array of values to be sorted through
 */
function findDuplicates(arr){
    const duplicates = [];
    arr.forEach(el => {
        if(!contains(duplicates, el)){
            duplicates.push(el);
        }
    });
}
/***
 * finds what is contained in an array
 * @param arr is the array that will be checked
 * @param el is the element that will be sorted through the array
 */
function contains(arr, el){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == el){
            return true;
        }
        
    }
    return false;
}