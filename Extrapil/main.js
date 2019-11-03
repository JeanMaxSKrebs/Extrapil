let xInicial = 33 * 3
let yInicial = 33 * 3
let mudaSprint = false
let variavelMudaSprint = 0
let person = new personagem(xInicial, yInicial, sprintExtrapil)

let parede = new paredes()


function loop() {
    variavelMudaSprint++
    if (variavelMudaSprint == 10) {
        mudaSprint = true
        variavelMudaSprint = 0
    }
    parede.desenha()
    person.desenha()
    person.move()
    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)