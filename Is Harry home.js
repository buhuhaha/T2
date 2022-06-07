function isObjectEmpty(obj){
    if(obj !== null && typeof obj !== "undefined" && typeof obj === "object")
        return Object.keys(obj).length === 0 && JSON.stringify(obj) === "{}";
    else
        return false;
}
