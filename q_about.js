var colorArray = ['#00022e','#373e02','#420303','#1B1811','black','#3B2F2F','pink','beige','white'];
var i = 0;
function changeColo(){
    document.body.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }

}

var fontArray = ['Arial','Lucida Sans','Helvetica', 'Courier New', 'Georgia'];
var j = 0;
function changeFont(){
    let b1 = document.getElementById("b1");
    b1.style.fontFamily = fontArray[j];
    let b2 = document.getElementById("b2");
    b2.style.fontFamily= fontArray[j];
    let b3 = document.getElementById("b3");
    b3.style.fontFamily = fontArray[j];
    let b4 = document.getElementById("b4");
    b4.style.fontFamily = fontArray[j];
    let b5 = document.getElementById("b5");
    b5.style.fontFamily = fontArray[k];
    document.body.style.fontFamily = fontArray[j];
    j++;
    if( j >= fontArray.length) {
        j= 0;
    }

}


var fontStyleArray = ['Italic','Normal'];
var k = 0;
function changeFontStyle(){
    let b1 = document.getElementById("b1");
    b1.style.fontStyle = fontStyleArray[k];
    let b2 = document.getElementById("b2");
    b2.style.fontStyle = fontStyleArray[k];
    let b3 = document.getElementById("b3");
    b3.style.fontStyle = fontStyleArray[k];
    let b4 = document.getElementById("b4");
    b4.style.fontStyle = fontStyleArray[k];
    let b5 = document.getElementById("b5");
    b5.style.fontStyle = fontStyleArray[k];
    document.body.style.fontStyle = fontStyleArray[k];
    k++;
    if( k >= fontStyleArray.length) {
        k= 0;
    }

}

var fontColorArray = ['#dfff11','#ff000d','#ff3503','#ff0055','#1B1811','#39ff14','beige','white'];
var h = 0;
function changeFontColor(){
    let b1 = document.getElementById("b1");
    b1.style.color = fontColorArray[h];
    let b2 = document.getElementById("b2");
    b2.style.color = fontColorArray[h];
    let b3 = document.getElementById("b3");
    b3.style.color = fontColorArray[h];
    let b4 = document.getElementById("b4");
    b4.style.color = fontColorArray[h];
    let b5 = document.getElementById("b5");
    b5.style.color = fontColorArray[h];
    document.body.style.color = fontColorArray[h];
    h++;
    if( h >= colorArray.length) {
        h = 0;
    }

}



function main_go(){
    window.location.href = "main.html"
    }
