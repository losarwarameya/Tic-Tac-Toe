const userInput = document.querySelectorAll('.box');
let count=0;
let x=0;
let o=0;
function checkFull() {
    if (count === 9) {
        reset();
        return true;
    }
}

function checkWin() {
    if (userInput[0].textContent === 'X' && userInput[1].textContent === 'X' && userInput[2].textContent === 'X') {
        // alert('X win');
        x=1;
        reset();
        return true;
    } else if (userInput[3].textContent === 'X' && userInput[4].textContent === 'X' && userInput[5].textContent === 'X') {
        // alert('X win');
        x=1;
        reset();
        return true;
    } else if (userInput[6].textContent === 'X' && userInput[7].textContent === 'X' && userInput[8].textContent === 'X') {
        // alert('X win');
        x=1;
        reset();
        return true;
    } else if (userInput[0].textContent === 'X' && userInput[3].textContent === 'X' && userInput[6].textContent === 'X') {
        // alert('X win');
        x=1;
        reset();
        return true;
    } else if (userInput[1].textContent === 'X' && userInput[4].textContent === 'X' && userInput[7].textContent === 'X') {
        // alert('X win');
        x=1;
        reset();
        return true;
    } else if (userInput[2].textContent === 'X' && userInput[5].textContent === 'X' && userInput[8].textContent === 'X') {
        // alert('X win');
        x=1;
        reset();
        return true;
    } else if (userInput[0].textContent === 'X' && userInput[4].textContent === 'X' && userInput[8].textContent === 'X') {
        // alert('X win');
        x=1;
        reset();
        return true;
    } else if (userInput[2].textContent === 'X' && userInput[4].textContent === 'X' && userInput[6].textContent === 'X') {
        // alert('X win');
        x=1;
        reset();
        return true;
    } else if (userInput[0].textContent === 'O' && userInput[1].textContent === 'O' && userInput[2].textContent === 'O') {
        // alert('O win');
        o=1;
        reset();
        return true;
    } else if (userInput[3].textContent === 'O' && userInput[4].textContent === 'O' && userInput[5].textContent === 'O') {
        // alert('O win');
        o=1;
        reset();
        return true;
    } else if (userInput[6].textContent === 'O' && userInput[7].textContent === 'O' && userInput[8].textContent === 'O') {
        // alert('O win');
        o=1;
        reset();
        return true;
    } else if (userInput[0].textContent === 'O' && userInput[3].textContent === 'O' && userInput[6].textContent === 'O') {
        // alert('O win');
        o=1;
        reset();
        return true;
    } else if (userInput[1].textContent === 'O' && userInput[4].textContent === 'O' && userInput[7].textContent === 'O') {
        // alert('O win');
        o=1;
        reset();
        return true;
    } else if (userInput[2].textContent === 'O' && userInput[5].textContent === 'O' && userInput[8].textContent === 'O') {
        // alert('O win');
        o=1;
        reset();
        return true;
    } else if (userInput[0].textContent === 'O' && userInput[4].textContent === 'O' && userInput[8].textContent === 'O') {
        // alert('O win');
        o=1;
        reset();
        return true;
    } else if (userInput[2].textContent === 'O' && userInput[4].textContent === 'O' && userInput[6].textContent === 'O') {
        // alert('O win');
        o=1;
        reset();
        return true;
    }
}


function reset() {
    
    setTimeout(() => {
        if(x===1){
            alert('You win');
            x=0;
        }
        else if(o===1){
            alert('Computer wins');
            o=0;
        }
        setTimeout(() => {
            for (let index = 0; index < userInput.length; index++) {
                const element = userInput[index];
                element.textContent = '';
            }
            count = 0;
        }, 100);
    }, 1);
    
}

function computerInput() {
    const random = Math.floor(Math.random() * userInput.length);
    if (userInput[random].textContent === 'X' || userInput[random].textContent === 'O') {
        computerInput();
    } else {
        userInput[random].textContent = 'O';
        count++;
        if(checkWin()) return;
        checkFull();
    }
}

for (let index = 0; index < userInput.length; index++) {
    const element = userInput[index];
    element.addEventListener('click', function () {
        if (element.textContent === '') {
            element.textContent = 'X';
            count++;
            if(checkWin()) return;
            if(checkFull()) return;
            computerInput();
        }
    });
}