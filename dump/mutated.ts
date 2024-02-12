console.log("Hello World")


/** INJECTED BY SUBTERFUGE */
    
    function __arraysEqual(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    }
    function __objectEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2)
    }
    


