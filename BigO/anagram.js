// Below solution uses frequency counter approach to find if two strings are anagram or not.
// Time Complexity is O(n)
// Solution1: Aman Singh

/*Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. */
function validAnagram(str1, str2) {
    let obj1 = {};
    let obj2 = {};
    if (str1.length !== str2.length) {
        return false;
    }
    for (let item of str1) {
        obj1[item] = (obj1[item] || 0) + 1;
    }
    for (let item of str2) {
        obj2[item] = (obj2[item] || 0) + 1;
    }
    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('aaz', 'zza'));


/*=========================Solution2============================*/

