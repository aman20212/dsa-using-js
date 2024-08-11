function same(arr1, arr2) {
    let obj1 = {};
    let obj2 = {};
    if (arr1?.length !== arr2?.length) {
        return false;
    }
    if (arr1?.length) {
        for (let item of arr1) {
            obj1[item] = (obj1[item] || 0) + 1;
        }
    }
    if (arr2?.length) {
        for (let item of arr2) {
            obj2[item] = (obj2[item] || 0) + 1;
        }
    }
    for (let key in obj1) {
        if (!(key ** 2 in obj2)) {
            return false;
        }
        if (obj2[key ** 2] !== obj1[key]) {
            return false;
        }
    }
    return true;

}

console.log(same([1, 2, 3], [1, 4, 9]))