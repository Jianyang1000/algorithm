// 直接减

var intToRoman = function (val) {
    let res = ''
    while (val > 0) {
        if (val >= 1000) {
            res += 'M'
            val -= 1000
        }else if (val >= 900) {
            res += 'CM'
            val -= 900
        }else if (val >= 500) {
            res += 'D'
            val -= 500
        }else if (val >= 400) {
            res += 'CD'
            val -= 400
        }else if (val >= 100) {
            res += 'C'
            val -= 100
        }else if (val >= 90) {
            res += 'XC'
            val -= 90
        }else if(val >= 50){
            res += 'L'
            val -= 50
        }else if (val >= 40) {
            res += 'XL'
            val -= 40
        }else if (val >= 10) {
            res += 'X'
            val -= 10
        }else if (val >= 9) {
            res += 'IX'
            val -= 9
        }else if (val >= 5) {
            res += 'V'
            val -= 5
        }else if (val >= 4) {
            res += 'IV'
            val -= 4
        }else if (val >= 1) {
            res += 'I'
            val -= 1
        }
    }
    return res
};


// 用hash来存
var intToRoman2 = function (val) {
    const store = [
        ['I',1],
        ['IV',4],
        ['V',5],
        ['IX',9],
        ['X',10],
        ['XL',40],
        ['L',50],
        ['XC',90],
        ['C',100],
        ['CD',400],
        ['D',500],
        ['CM',900],
        ['M',1000],
    ]
    let index = store.length - 1
    let res = ''
    while(val > 0){
        if(val >= store[index][1]){
            res += store[index][0]
            val -= store[index][1]
        }else {
            index -= 1
        }
    }
    return res
};





console.log(intToRoman2(58))