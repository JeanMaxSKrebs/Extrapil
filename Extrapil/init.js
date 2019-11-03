const largura = window.innerWidth
const altura = window.innerHeight
    /*definiçoes teclado*/
let UP = 38,
    DOWN = 40,
    LEFT = 37,
    RIGHT = 39
let moveEsquerda = false,
    moveDireita = false,
    moveCima = false,
    moveBaixo = false

const canvas = document.querySelector('canvas')

canvas.height = altura
canvas.width = largura
console.log(altura)
console.log(largura)
const contexto = canvas.getContext('2d')

const sprintExtrapil = new Image()

sprintExtrapil.src = "./sprintExtrapil.png"