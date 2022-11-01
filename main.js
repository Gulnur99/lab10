var lab1 = [5,5,0,5,5,10,10]
var lab2 = [5,5,5,5,5,5,10]
var lab3 = [5,10,10,15]
var lab4_5 = [10,5,5,5,5,5,8,10,10,10]
var lab6 = [5,5,10,5,5,10]
var lab8 = [4,9,2,10,5]
var quiz1 = [40]

function get_sum(lab) {
    var sum = 0;
    for (let idx = 0; idx < lab.length; idx++) {
        let score = lab[idx];
        sum += score;
    }
    return sum;
}
function main(labs) {
    var lab_name = ['lab1','lab2','lab3','lab4_5','lab6','lab8','quiz1'];
    var result = {};
    var sums = [];
    for (let index = 0; index < labs.length; index++) {
        var lab = labs[index]
        result[lab_name[index]] = lab;
        var sum = get_sum(lab)
        sums.push(sum)
        
    }
    result['sums'] = sums;
    var total_score = get_sum(sums)
    result['total_score'] = total_score
    return result
    // results = {
    //     lab1:  lab1,
    //     lab2:  lab2,
    //     lab3:  lab3,
    //     lab4_5:  lab4_5,
    //     lab6:  lab6,
    //     quiz1:  quiz1,
    //     sums: sums,
    //     total_score: total_score
    // }
}


var labs = [lab1,lab2,lab3,lab4_5,lab6,lab8,quiz1]

var result = main(labs);
console.log(result);
