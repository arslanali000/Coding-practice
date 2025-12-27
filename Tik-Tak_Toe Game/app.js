let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let resetBtn1 = document.querySelector("#reset-button1");
let winnerModal = document.querySelector("#winnerModal");
let winnerMsg = document.querySelector(".winnerMsg" );
let newGameBtn = document.querySelector("#newGameBtn");

let turnO = true;
let count = 0; // To track draw

const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

let resetGame = () => {
    turnO = true;
    count = 0; // Reset count
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    winnerModal.style.display = "none";
    
    resetBtn.classList.add("spin-once");
    setTimeout(() => resetBtn.classList.remove("spin-once"), 500);
};
 const resetGame1 = () => {
    turnO = true;
    count = 0; // Reset count
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    winnerModal.style.display = "none";
    
    resetBtn.classList.add("spin-once");
    setTimeout(() => resetBtn.classList.remove("spin-once"), 500);
};
// Function for Draw
const gameDraw = () => {
    winnerMsg.innerHTML = `
        <div class="main-msg">Draw!</div>
        <div class="sub-msg">No one has won the game.</div>
    `;
    winnerModal.style.display = "flex";
    boxes.forEach(box => box.disabled = true);
};

// Function for Winner
const showWinner = (winner) => {
    winnerMsg.innerHTML = `
        <div class="main-msg">Winner!</div>
        <div class="sub-msg">Player ${winner} has won the game</div>
    `;
    winnerModal.style.display = "flex";
    boxes.forEach(box => box.disabled = true);
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = `
        <div class="plrO">O</div>`
            turnO = false;
        } else {
            box.innerHTML = `
        <div class="plrX">X</div>`
            turnO = true;
        }
        box.disabled = true;
        count++; // Increase count on every click

        let isWinner = checkWinner();

        // If 9 boxes are filled and there is no winner
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true; // Return true if winner found
            }
        }
    }
    return false; // Return false if no winner yet
};

resetBtn.addEventListener("click", resetGame);
resetBtn1.addEventListener("click", resetGame1);
newGameBtn.addEventListener("click", resetGame);