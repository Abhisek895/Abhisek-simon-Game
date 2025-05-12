let games=[];
let users=[];
let start=false;
let level=0;
let colors=["red" , "blue" ,"green", "cyan"];
let h2=document.querySelector("h2");
let scor=0;
let Hscor=0;
let levels=new Audio("leavlUp.mp3");
let game_over=new Audio("game-over.mp3");

//This is the start
document.addEventListener("keypress",function(){
    if(start==false){
        h2.style.color="rgb(29, 255, 119)";
    console.log("Game Started");
    start=true;
    levelUp();
    }
});

function btnflash(btn){
    
     btn.classList.add("flash");
     setTimeout(function(){
     btn.classList.remove("flash");
     },200);
}

function userflash(btn){
    btn.classList.add("useflash");
    setTimeout(function(){
    btn.classList.remove("useflash");
    },200);
}


function levelUp(){
    users=[];
levels.play();
    level++;
    h2.innerText=`Level ${level}`
    let ranindx=Math.floor(Math.random()*4);
    let ranomcolor=colors[ranindx];
   let random_btn=document.querySelector(`.${ranomcolor}`);
   games.push(ranomcolor);
    console.log(games);
    btnflash(random_btn);
}
function btnpress(){  
    if(start==true){
   let btn=this;
   userflash(btn);
    let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    users.push(usercolor);
    check(users.length-1);
    }

    else{
        alert("Enter Any key First");
        h1.innerText="Enter Any key First";
    }
}

function check(indx){
     
     if(games[indx]==users[indx]){
        scor++;
        if(games.length==users.length){
          setTimeout(levelUp,1000)
         
        }

     }
     else{
        game_over.play();
        h2.innerHTML=`Game Over! Enetr Any Key To Restart...<br><b>(Your score is ${scor})</b>`
        h2.style.color="black";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        h2.style.color="red";
        document.querySelector("body").style.backgroundColor="black";
        },1000);
        reset();
     }

}

function reset(){
    start=false;
    games=[];
    users=[];
    level=0;
    
}

let allbtn=document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click" ,btnpress);
}

