function main(){

    let confirm = document.getElementById("mainResult").innerHTML;
    if(confirm=="You Lost..!!"){
        alert("Game over! Please restart the game");
    }else{

        let x;

        do{
            x = Math.floor(Math.random()*100/16.6);
        }while(x==0);

        let currentTotal=parseInt(document.getElementById("result").innerHTML);
        let Total=currentTotal+x;
        document.getElementById("result").innerHTML=Total;

        if(Total<15){
            document.getElementById("mainResult").innerHTML="Generate another Dice..!";
        }else if(Total==15){
            document.getElementById("mainResult").innerHTML="You've won !!";
            alert("Congratulations..!");
            document.getElementById("restartBtn").style.display="block";
        }else if(Total>15){
            document.getElementById("mainResult").innerHTML="You Lost..!!";
            alert("Lost :( click restart to play again");
            document.getElementById("restartBtn").style.display="block";
        }

        let img= document.createElement("img");
        img.src="images/"+ x + ".png";
        img.height=200;

        document.body.appendChild(img);

    }
}

function restart(){
    location.reload();
}
