document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button') 
    const width = 10 

    const lTetromino = [
        [1, width+1, width2+1, 2], 
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino = [ 
        [0,width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1] 
    ]

    const oTetromino = [ 
        [0,1 ,width, width+1],
        [0,1, width, width+1],
        [0,1, width, width+1],
        [0,1, width, width+1]
    ]

    const iTetromino = [ 
        [1, width+1, width*2+1, width*3+1]
        [width, width+1, width+2, width +3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3] 
    ]

    const theTetrominoes = [iTetromino, zTetromino, oTetromino, iTetromino]

    let currentPosition = 4 
    let random = Math.floor(Math.random()*theTetrominoes.lenght)
    let current = theTetrominoes[0][0]

    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }
    draw()
})

