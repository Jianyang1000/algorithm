// 我的解法，代码很乱，不直观 O(n)


var myAtoi = function(str) {
    let newStr = str.trim()
    let end = 1
    let length = newStr.length
    if (newStr[0] === '+' || newStr[0] === '-' || checkRate(newStr[0])) {
        while (newStr[end] !== ' ' && checkRate(newStr[end]) && end < length) {
            end += 1
        }
    }
    else {
        return 0
    }

    if(+newStr.slice(0, end) > Math.pow(2,31) - 1){
        return Math.pow(2,31) - 1
    }
    else if (+newStr.slice(0, end) < -1 * Math.pow(2,31)){
        return -1 * Math.pow(2,31)
    }
    else {
        return (newStr.slice(0, end) === '-' || newStr.slice(0, end) === '+') ? 0 : +newStr.slice(0, end);
    }
};

function checkRate(input) {
    var re = /^[0-9]+.?[0-9]*/;
    if (!re.test(+input)) {
        return false
    }
    return true
}





// 别人的解法，体会到了正则的厉害之处 


var myAtoi = function(str) {
    str = str.trim()
    var reg = /^[\+\-]?\d+/;
    let res = reg.exec(str)
    if(res){
        str = +res[0]
    }else {
        return 0
    }

    if(str > Math.pow(2,31) + 1){
        return Math.pow(2,31) - 1
    }else if(str < - Math.pow(2,31)){
        return - Math.pow(2,31)
    }else {
        return str
    }
};


console.log(myAtoi('a   -12w'))