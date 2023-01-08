module.exports = function reverse (n) {
    let arr = String(Math.abs(n)).split('');
    let result = '';

    while(arr.length > 0) {
      result += arr.pop();
    }
    
    return Number(result);
}
