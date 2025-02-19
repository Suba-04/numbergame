var number=document.getElementById("number")
var result=document.getElementById("result")
var score=document.getElementById("score")
var random=Math.floor(Math.random()*10)+1
var so=10

function check(){
    
    var guessnumber = number.value
    
    if(random==guessnumber)
{
    
    result.textContent="Right\u{1F60A}"
    alert("you won \u{1F973}\u{1F973}")
}
else {
    so=so-1
    result.textContent="Wrong\u{1F622}"
    score.textContent="Score: "+so
     

}

}
