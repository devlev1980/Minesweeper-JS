console.log('Hello');
const board = document.querySelector('.board');

function createBoard(rows,cols) {
  board.innerHTML = '';
    for (let i = 0; i <rows ; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < cols; j++) {
            const col = document.createElement('div');
            col.className = 'col hidden';
            if(Math.random()<0.1){
                col.className='col hidden bomb';
            }
            row.appendChild(col);
        }
        board.appendChild(row)
    }
}
createBoard(10,10);

//restart Game
function restartGame(){
    createBoard(10,10)
}

//Game Status
function gameOver(isWin){
    let message = null;
    if(isWin){
        message = 'You won!'
    }else{
        message = 'You lost!'
    }

    alert(message);
    restartGame();
}

//Listen to the events

board.addEventListener('click',function (event) {
    // if(event.target.matches('.col.hidden')){
    //     console.log('aaa')
    // }
    if (event.target.matches('.col.hidden.bomb')){
        // console.log('Game Over!!!')
        gameOver(false)
    }
    // restartGame();
});
