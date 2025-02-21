let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (start == false){
        console.log("game is started");
        start = true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){ 
        btn.classList.remove("flash");
    }, 150);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){ 
        btn.classList.remove("userflash");
    }, 150);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    // Random button choose
    let randidx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameflash(randbtn);
    gameseq.push(randcolor);
    
}
function check(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score Was<b>${level}</b><br> Press Any Key To Strat`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        resizeTo();
    }
}

function btnpress(){
   
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length-1);
}  
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}


