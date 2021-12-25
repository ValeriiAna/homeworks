
// Если а – четное посчитать а*б, иначе а+б
function isEven(a,b) {
    if ((a % 2) === 0) {
        return a * b;
    } else if ((a % 2) === 1) {
        return a + b;
    }
}

// Определить какой четверти принадлежит точка с координатами (х,у)
function FindQuarter(x,y) {
    if (x>0 && y>0){
        return "1";
    } else if (x<0 && y>0){
        return "2";
    } else if(x<0 && y<0) {
        return "3";
    } else if(x>0 && y<0) {
        return "4";
    } else if(x===0 && y > 0) {
        return "1 & 2";
    } else if(x > 0 && y === 0) {
        return "1 & 4";
    } else if(x < 0 && y === 0) {
        return "3 & 2";
    } else if(x === 0 && y < 0) {
        return "3 & 4";
    }
}


// Найти суммы только положительных из трех чисел
function SumOfPositiveElems(a,b,c){
    if (a>0 && b>0 && c<0){
        return a+b;
    } else if(a>0 && b<0 && c>0) {
        return a+c;
    } else if(a<0 && b>0 && c>0) {
        return b+c;
    } else if(a>0 && b>0 && c>0) {
        return a + b + c;
    } else if(a < 0 && b <0 && c >0) {
        return c;
    } else if(a > 0 && b < 0 && c <0) {
        return a;
    } else if(a < 0 && b > 0 && c <0) {
        return b;
    } else {
        return NaN;
    }
}
//alert(SumOfPositiveElems(1,4,5));
//alert(SumOfPositiveElems(1,-7,44))

// Посчитать выражение (макс(а*б*с, а+б+с))+3
function CalculateMax(a,b,c){
    let X = a*b*c;
    let Y = a+b+c;
    if(X >Y){
        return X + 3;
    } else {
        return Y + 3;

    }
}
//alert(CalculateMax(1,1,1));
//alert(CalculateMax(2,5,5));

// Написать программу определения оценки студента по его рейтингу, на основе следующих правил
function FindStudentMark(R){
    if(R>=0 && R<=19){
        return('F');
    } else if(R>=20 && R<=39){
        return('E');
    } else if(R>=40 && R<=59){
        return('D');
    } else if(R>=60 && R<=74){
        return('C');
    } else if(R>=75 && R<=89){
        return('B');
    } else if (R>=90 && R<=100){
        return('A');
    }
}
//alert(FindStudentMark(44));
//alert(FindStudentMark(75));


module.exports = {
    isEven, FindQuarter, SumOfPositiveElems, CalculateMax, FindStudentMark
}
