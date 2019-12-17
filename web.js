const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


//Mutable State
let state = initialState()

//Position helpers
const x = c => Math.round(c * canvas.width / state.cols)
const y = r => Math.round(r * canvas.height / state.rows)


//Game Loop Draw

const draw= () => {
    //clear
    ctx.fillStyle = '#232323'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    //Draw snake
    ctx.fillStyle = 'rgb(0,250,50)'
    state.snake.map(p => ctx.fillRect(x(p,x), y(p,y), x(1), y(1)))

    //draw apples
    ctx.fillStyle = 'rgb(255,50,0)'
    ctx.fillRect(x(state.apple.x), y(state.apple.y), x(1), y(1))

    //crash

    if(state.snake.length == 0){
        ctx.fillStyle = 'rgb(255,0,0)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    
}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'w': case 'h': case 'ArrowUp': state=enqueue(state, NORTH); break
        case 'a': case 'j': case 'ArrowLeft': state=enqueue(state, NORTH); break
        case 's': case 'k': case 'ArrowDown': state=enqueue(state, NORTH); break
        case 'd': case 'l': case 'ArrowRight': state=enqueue(state, NORTH); break


    }
})

//Main
draw();
window.requestAnimationFrame(step(0))