export const chooseRandomPlay = (arr) => {
    var result,
        len = arr.length;
        var x = Math.floor(Math.random() * len);
        result = arr[x]
    return result;
}