let uScore=1;
let cScore=1;

const choices=document.querySelectorAll(".choice");
const play=document.querySelectorAll(".play");

const tts=document.querySelector("#msg");
const userScore=document.querySelector("#u-score");
const compScore=document.querySelector("#c-score");




const comgen=()=>{
    const y=["rock","paper","scissors"];
    const z=Math.floor(Math.random()*3);
    return (y[z]);
}

const PlayGame=(x)=>{
    let v= comgen();
    if(x===v){
       DrawGame();
    }else{
        let userwin=true;
        if(x==="rock"){
            //paper,scissors
           userwin=v==="paper"?false:true;
        }else if(x==="paper"){
            //rock scissors
            userwin=v==="scissors"?false:true;
        }else{
            //paper scissors
            userwin=v==="rock"?false:true;

        }
        Showwinner(userwin,x,v);
    }
    
}
const Showwinner=(userwin,x,v)=>{
    if(userwin){
        tts.innerHTML=`you won:${x} beats ${v}`;
        tts.style.backgroundColor="green";
        //uScore++;
        userScore.innerHTML= uScore++;
        
    }else{
        tts.innerHTML=`comp won: ${v} beats ${x}`;
        tts.style.backgroundColor="red";
        //cScore++;
        compScore.innerHTML=cScore++;
    }
}
const DrawGame=()=>{
    tts.innerHTML="the game was Draw";
    tts.style.backgroundColor="orange"

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let x=choice.getAttribute("id");
        PlayGame(x);
    })
  
})