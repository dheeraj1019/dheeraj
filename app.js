let tacs=document.querySelectorAll(".tac");
let btn=document.querySelectorAll("#res");
let ano=document.querySelector(".hide");
let newbtn=document.querySelector("#newres");
let para=document.querySelector("#nwpara")
let player1=true;
tacs.forEach((tac)=>{
    tac.addEventListener("click",()=>{
        if(player1){
            tac.innerHTML="X"
            tac.style.backgroundColor="green"
            player1=false;
        }
        else{
            tac.innerHTML="O";
            tac.style.backgroundColor="yellow"
            player1=true;
        }
        tac.disabled=true;

        checkWinner()
    })
})

const winners=[
    [0,1,2],//1
    [3,4,5],//2
    [6,7,8],//3
    [0,3,6],//4
    [1,4,7],//5
    [2,5,8],//6
    [2,4,6],//7
    [0,4,8] //8
]
function checkWinner()
{
    for(let pat of winners)
    {
        let x=tacs[pat[0]].innerHTML;
        let y=tacs[pat[1]].innerHTML;
        let z=tacs[pat[2]].innerHTML;
        if(x!=""&&y!==""&&z!=="")
        {
            if(x===y && y==z && x==z)
            {
                console.log("winner",x)
                showwinner(x)
                
            }
        }
    }
}

const showwinner=(w)=>{
    ano.innerHTML=`CONGRATULATIONS TO THE  ${w}`;
    ano.classList.remove("hide");
    dis();
}
const dis=()=>{
    for(let tac of tacs)
    {
        tac.disabled=true;
    }
}

const newGame=()=>{
    player1=true;
    enable();
    ano.classList.add("hide");

}
const enable=()=>{
    for(let tac of tacs){
        tac.disabled=false;
        tac.innerHTML="";
        tac.style.backgroundColor="white";
        

    }
}
res.addEventListener("click",newGame);
newres.addEventListener("click",newGame);