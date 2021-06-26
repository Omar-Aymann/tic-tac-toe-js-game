let cells = document.getElementsByClassName('box');
let overlayMsg = document.querySelector('.overlay');
let restartBtn = document.getElementById('restartBtn');
let player1 = 'X';
let player2 = 'O';
let msg = document.getElementById('msg');
let fullCells = false;
let clicked = [];
restartBtn.addEventListener('click', function() {
    location.reload();
})
play(player1);
function play(player) {
    for(let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
            let cellContent = cells[i].innerText;
            if(cells[i].innerText == "") {
                cells[i].innerText = player;
            }
            if(cells[0].innerText == cells[4].innerText && cells[4].innerText == cells[8].innerText && cells[0].innerHTML != "") {
                msg.innerHTML = "player " + cells[0].innerText + " is the Winner";
                overlayMsg.style.display = 'flex';
            }
            if(cells[0].innerText == cells[1].innerText && cells[1].innerText == cells[2].innerText && cells[0].innerHTML != "") {
                msg.innerHTML = "player " + cells[0].innerText + " is the Winner";
                overlayMsg.style.display = 'flex';
            }
            if(cells[3].innerText == cells[4].innerText && cells[4].innerText == cells[5].innerText && cells[3].innerHTML != "") {
                msg.innerText = "player " + cells[3].innerText + " is the Winner";
                overlayMsg.style.display = 'flex';
            }
            if(cells[6].innerText == cells[7].innerText && cells[7].innerText == cells[8].innerText && cells[6].innerHTML != "") {
                msg.innerHTML = "player " + cells[6].innerText + " is the Winner";
                overlayMsg.style.display = 'flex';
            }
            if(cells[0].innerText == cells[3].innerText && cells[3].innerText == cells[6].innerText && cells[0].innerHTML != "") {
                msg.innerHTML = "player " + cells[0].innerText + " is the Winner";
                overlayMsg.style.display = 'flex';
            }
            if(cells[1].innerText == cells[4].innerText && cells[4].innerText == cells[7].innerText && cells[1].innerHTML != "") {
                msg.innerHTML = "player " + cells[1].innerText + " is the Winner";
                overlayMsg.style.display = 'flex';
            }
            if(cells[2].innerText == cells[5].innerText && cells[5].innerText == cells[8].innerText && cells[2].innerHTML != "") {
                msg.innerHTML = "player " + cells[2].innerText + " is the Winner";
                overlayMsg.style.display = 'flex';
            }
            if(cells[2].innerText == cells[4].innerText && cells[4].innerText == cells[6].innerText && cells[2].innerHTML != "") {
                msg.innerHTML = "player " + cells[2].innerText + " is the Winner";
                overlayMsg.style.display = 'flex';
            }
            if(clicked[i]) {
                return;
            } else 
            {
                switch (player) {
                    case 'X':
                        player = 'O';
                        break;
                    case 'O':
                        player = 'X';
                        break;
                }
            }
            clicked[i] = true;
            checkCells();
        });

    }
}

function checkCells() {
    for(let j = 0; j < cells.length; j++) {
        if(cells[j].innerHTML != "") {
            fullCells = true;
        } else {
            fullCells = false;
            break;
        }
    }
    if(fullCells == true) {
        msg.innerText = 'draw';
    }
}