function game() {


    const gameBlock = document.querySelector(".game");
    const NewGame = gameBlock.querySelector(".new-game");
    // const currentPlayer1 = gameBlock.querySelector(".current-score__gamer-1");
    // const currentPlayer2 = gameBlock.querySelector(".current-score__gamer-2");
    const rollDice = gameBlock.querySelector(".roll-dice");
    const hold = gameBlock.querySelector(".hold");
    const gameCube = gameBlock.querySelector(".game-cube");
    const cubeNumber = gameBlock.querySelectorAll(".cube-number");
    const gamerTitle = gameBlock.querySelectorAll(".gamer__title");
    const gameScoreTotal = gameBlock.querySelectorAll(".gamer-score");
    const currentPlayer = gameBlock.querySelectorAll(".current-score");

    let playerIsActive = 0;
    let gameOver = false;
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;




    gamerTitle[0].classList.add("player-active");
    cubeNumber[4].classList.add('dot-active');



    rollDice.addEventListener("click", e => {
        e.preventDefault();

        if (gameOver) {
            return 0;
        }
        const count = random(1, 6);
        console.log(count);
        // for (let j = 0; j < gamerTitle.length; j++) {
        //gamerTitle[0] = playerIsActive;

        for (let i = 0; i < cubeNumber.length; i++) {
            cubeNumber[i].classList.remove("dot-active");
        }

        cubeNumber[count - 1].classList.add("dot-active");

        /* if (playerIsActive) {
             currentPlayer[0].textContent = +currentPlayer[0].textContent + count;
         } else {
             currentPlayer[1].textContent -= -count;
         }*/

        currentPlayer[playerIsActive].textContent -= -count;


        if (count === 1) {


            // gamerTitle[playerIsActive].classList.remove("player-active");
            // gamerTitle[+!playerIsActive].classList.add("player-active");
            currentPlayer[playerIsActive].textContent = 0;
            // playerIsActive = +!playerIsActive;

            // playerIsActive = playerIsActive === 1 ? 0: 1;

            if (!playerIsActive) {
                gamerTitle[0].classList.remove("player-active");
                gamerTitle[1].classList.add("player-active");
                playerIsActive = 1;
            } else {

                gamerTitle[1].classList.remove("player-active");
                gamerTitle[0].classList.add("player-active");
                playerIsActive = 0;
            }



        }




        // if (playerIsActive === 1 && count <= 1) {
        //     gamerTitle[1].classList.remove("player-active");
        //     gamerTitle[0].classList.add("player-active");
        //     // currentPlayer[1].innerHTML = 0;
        //     // playerIsActive = true;
        //     console.log("eroro");

        // }

        // if (playerIsActive === false) {
        //     //gamerTitle[1].classList.add("player-active");
        //     //currentPlayer[1].innerHTML += count;

        //     if (count <= 1) {
        //         playerIsActive = true;
        //     }
        // }



        //}




        // if (playerIsActive === false && count <= 1) {
        //     gamerTitle[1].classList.remove("player-active");
        //     gamerTitle[0].classList.add("player-active");
        //     currentPlayer[1].innerHTML = 0;
        //     playerIsActive = true;

        // }

    });

    NewGame.addEventListener('click', e => {
        e.preventDefault();
        gameOver = false;
        for (let i = 0; i < cubeNumber.length; i++) {
            cubeNumber[i].classList.remove("dot-active");
        }
        cubeNumber[4].classList.add("dot-active");

        //for (let j = 0; j < gamerTitle.length; j++) {
        gamerTitle[1].classList.remove("player-active");
        gamerTitle[0].classList.add("player-active");
        //}

        for (let r = 0; r < gameScoreTotal.length; r++) {
            gameScoreTotal[r].textContent = 0;
        }

        for (let t = 0; t < currentPlayer.length; t++) {
            currentPlayer[t].textContent = 0;
        }
        playerIsActive = 0;


    });



    hold.addEventListener('click', e => {
        e.preventDefault();

        if (gameOver) {
            alert("start new Game");
            return 0;

        }
        //if(playerIsActive === 0) {
        gameScoreTotal[playerIsActive].textContent -= -currentPlayer[playerIsActive].textContent;
        if (gameScoreTotal[playerIsActive].textContent >= 100) {
            alert(`win Player ${playerIsActive + 1}`);
            gameOver = true;
            return 0;
        }
        currentPlayer[playerIsActive].textContent = 0;
        gamerTitle[playerIsActive].classList.remove("player-active");
        gamerTitle[+!playerIsActive].classList.add("player-active");
        // playerIsActive = +!playerIsActive;
        if (playerIsActive === 0) {
            playerIsActive = 1;
        } else {
            playerIsActive = 0;
        }

        // } else if (gamerTitle[1].classList.contains("player-active")) {
        //     gameScoreTotal[1].innerHTML -= -currentPlayer[1].innerHTML;
        //     currentPlayer[1].innerHTML = 0;
        //     gamerTitle[1].classList.remove("player-active");
        //     gamerTitle[0].classList.add("player-active");
        // }
    });

}

game();