/**
* A function use dto get parsed values from localstorage
* @param {string} key localstorage key
*@returns JSON value from localStorage,undefined in caase of errors
 */


export const getValue = (key) => {
    try{
const value = localStorage.getItem(key);
     const parsedValue = JSON.parse(value)
     return parsedValue
    }
    catch (e){
        return undefined
    }
    
}

/**
*
* @param {string} key whose value is to be updated in JSON
* @param {JSON} value value to be stored in localStorage
 */
export const updateValue = (key,value) => {
   
 localStorage.setItem(key,JSON.stringify(value));
    
}