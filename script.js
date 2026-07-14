let currentPage = 1;


// YES BUTTON

function yes(nextPage){

    // Start music after first YES click
    if(nextPage === 2){

        let music = document.getElementById("music");

        music.play().catch(()=>{});

    }


    // Hide current page
    document
    .getElementById("q"+currentPage)
    .classList
    .add("hidden");


    // Show next page
    document
    .getElementById("q"+nextPage)
    .classList
    .remove("hidden");


    currentPage = nextPage;


    createSparkles();


    // Start timer when countdown page opens
    if(nextPage === 6){

        startCountdown();

    }

}




// NO BUTTON

function no(page){

    let box =
    document.getElementById("q"+page);


    box.style.animation="shake 0.4s";


    setTimeout(()=>{

        box.style.animation="";

    },400);

}







// COUNTDOWN PAGE → ENVELOPE PAGE

function showEnvelope(){


    document
    .getElementById("q6")
    .classList
    .add("hidden");


    document
    .getElementById("q7")
    .classList
    .remove("hidden");


    currentPage = 7;

}







// OPEN LETTER

function openLetter(){


    document
    .getElementById("letterBox")
    .style.display="flex";


    heartRain();

    confetti();

}








// ANNIVERSARY COUNTDOWN

function startCountdown(){


    let anniversary =
    new Date("2024-04-15T00:00:00");



    setInterval(()=>{


        let now =
        new Date();



        let difference =
        now - anniversary;



        let days =
        Math.floor(
        difference/(1000*60*60*24)
        );



        let hours =
        Math.floor(
        (difference/(1000*60*60))%24
        );



        let minutes =
        Math.floor(
        (difference/(1000*60))%60
        );



        let seconds =
        Math.floor(
        (difference/1000)%60
        );



        document.getElementById("days").innerHTML =
        days;


        document.getElementById("hours").innerHTML =
        hours;


        document.getElementById("minutes").innerHTML =
        minutes;


        document.getElementById("seconds").innerHTML =
        seconds;



    },1000);


}








// HEART RAIN

function heartRain(){


    let hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "✨",
        "🥹"
    ];



    for(let i=0;i<200;i++){


        let heart =
        document.createElement("div");


        heart.className="heart";


        heart.innerHTML =
        hearts[
        Math.floor(Math.random()*hearts.length)
        ];



        heart.style.left =
        Math.random()*100+"vw";


        heart.style.fontSize =
        Math.random()*25+15+"px";


        heart.style.animationDuration =
        Math.random()*3+2+"s";



        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },5000);


    }


}








// CONFETTI

function confetti(){


    let emojis = [
        "❤️",
        "💕",
        "✨",
        "🌸",
        "💗"
    ];



    for(let i=0;i<100;i++){


        let piece =
        document.createElement("div");


        piece.innerHTML =
        emojis[
        Math.floor(Math.random()*emojis.length)
        ];



        piece.style.position="fixed";

        piece.style.top="-20px";

        piece.style.left =
        Math.random()*100+"vw";


        piece.style.fontSize =
        Math.random()*25+10+"px";


        piece.style.zIndex="300";



        piece.animate(

        [

        {
        transform:"translateY(0) rotate(0deg)"
        },


        {
        transform:
        "translateY(110vh) rotate(720deg)"
        }

        ],


        {

        duration:
        Math.random()*3000+2000,

        easing:"linear"

        }


        );



        document.body.appendChild(piece);



        setTimeout(()=>{

            piece.remove();

        },5000);


    }


}








// SPARKLES WHEN MOVING PAGES

function createSparkles(){


    for(let i=0;i<15;i++){


        let sparkle =
        document.createElement("div");


        sparkle.innerHTML="✨";


        sparkle.style.position="fixed";

        sparkle.style.left =
        Math.random()*100+"vw";


        sparkle.style.top =
        Math.random()*100+"vh";


        sparkle.style.fontSize="20px";

        sparkle.style.zIndex="50";



        sparkle.animate(

        [

        {
        opacity:1,
        transform:"scale(1)"
        },


        {
        opacity:0,
        transform:"scale(2)"
        }

        ],


        {

        duration:1000

        }


        );



        document.body.appendChild(sparkle);



        setTimeout(()=>{

            sparkle.remove();

        },1000);


    }


}








// SHAKE EFFECT FOR NO BUTTON

let style =
document.createElement("style");


style.innerHTML = `

@keyframes shake{

0%{
transform:translateX(0);
}

25%{
transform:translateX(-10px);
}

50%{
transform:translateX(10px);
}

75%{
transform:translateX(-10px);
}

100%{
transform:translateX(0);
}

}

`;


document.head.appendChild(style);
