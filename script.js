
let turn = "x" ;
let squres = [];
function end (num1 , num2 , num3) {
    title.innerHTML = squres[num1]+ '  winner'
    document.getElementById("item"+num1).style.background = "black";
    document.getElementById("item"+num2).style.background = "black";
    document.getElementById("item"+num3).style.background = "black";
    setInterval(function(){
        title.innerHTML+= '.'},1000)
    setTimeout(function(){location.reload();},2000)
}
function winner()  {
    for (let i=1 ; i<10 ; i++) {
        squres[i] = document.getElementById('item' + i).innerHTML;
    }
    if (squres[1] == squres[2] && squres[2] == squres[3] && squres[1] != "" ) {

        end(1 , 2 , 3);
        
    }else if(squres[4] == squres[5] && squres[5] == squres[6] && squres[5] != "" ){
        end(4 , 5 , 6);
    }else if (squres[7] == squres[8] && squres[9] == squres[7] && squres[8] != "" ){
        end(7 , 8 , 9);
    }else if (squres[1] == squres[4] && squres[4] == squres[7] && squres[4] != "" ){
        end(1 , 4, 7);
    }else if  (squres[3] == squres[6] && squres[6] == squres[9] && squres[9] != "" ){
        end(3, 6, 9)
    }else if(squres[1] == squres[5] && squres[5] == squres[9] && squres[1] != "" ){
        end(1, 5, 9)
    }else if (squres[3] == squres[5] && squres[5] == squres[7] && squres[7] != "" ){
        end(3, 5, 7)
    }else if(squres[2] == squres[5] && squres[5] == squres[8] && squres[2] != "" ){
        end(2, 5, 8)
    }
}
function game(id) {
    let element = document.getElementById(id);
    
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'x' ;
        turn = 'o';
        title.innerText = '"O"' ;
        
    }else if(turn === 'o' && element.innerHTML== ''){
        element.innerHTML = "o" ;
        turn = 'x';
        title.innerHTML = '"X"' ;
        
    }

    winner();
};