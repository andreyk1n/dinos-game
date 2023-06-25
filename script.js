let dino = document.getElementById('dino')
let cactus = document.getElementById('cactus') 

let points =  document.getElementById('points')
let pointsCounter = 0

function showPoints() {
    points.textContent = pointsCounter
}

showPoints()

document.addEventListener('keydown', function() {
    jump()
})

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
    } 
    setTimeout (function() {
        dino.classList.remove('jump')
    }, 600)
    pointsCounter++
    showPoints()
}

let isAlive = setInterval( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('GAME OVER!')
        pointsCounter = 0
        showPoints()
    }
}, 10)




