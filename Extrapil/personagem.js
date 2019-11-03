function personagem(x, y, imagem) {

    this.x = x
    this.y = y
    this.width = 32 * 2
    this.height = 32 * 2
    this.spriteX = 73
    this.spriteY = 1
    this.spriteHeight = 30
    this.spriteWidth = 22

    this.desenha = function() {
        contexto.drawImage(imagem, this.spriteX, this.spriteY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }

    this.direita = function() {
        if (this.spriteY == 34) {
            this.spriteY = 1
        }
        if (this.spriteX == 73) {
            this.spriteX = 37
            return;
        }
        if (this.spriteX == 37) {
            this.spriteX = 5
            return;
        }
        if (this.spriteX == 5) {
            this.spriteX = 37
            return;
        }

    }
    this.esquerda = function() {
        if (this.spriteY == 1) {
            this.spriteY = 34
            spriteX = 9
        }
        if (this.spriteX == 9) {
            this.spriteX = 37
            return;
        }
        if (this.spriteX == 37) {
            this.spriteX = 69
            return;
        }
        if (this.spriteX == 69) {
            this.spriteX = 37
            return;
        }
    }
    this.cima = function() {

    }
    this.baixo = function() {

    }
    this.comecaMovimento = function(e) {
        var key = e.keyCode;
        if (key === LEFT && key !== RIGHT) {
            moveEsquerda = true
        }
        if (key === RIGHT && key !== LEFT) {
            moveDireita = true
        }
        if (key === UP && key !== DOWN) {
            moveCima = true
        }
        if (key === DOWN && key !== UP) {
            moveBaixo = true
        }
    }

    this.paraMovimento = function(e) {
        var key = e.keyCode;
        if (key === LEFT && key !== RIGHT) {
            moveEsquerda = false;
        }
        if (key === RIGHT && key !== LEFT) {
            moveDireita = false;
        }
        if (key === UP && key !== DOWN) {
            moveCima = false;
        }
        if (key === DOWN && key !== UP) {
            moveBaixo = false;
        }
    }
    window.addEventListener("keydown", this.comecaMovimento);
    window.addEventListener("keyup", this.paraMovimento);

    this.move = function() {
        if (moveEsquerda) {
            person.x = person.x - 3;
            if (mudaSprint == true) {
                this.esquerda()
                mudaSprint = false
            }
        }
        if (moveDireita) {
            person.x = person.x + 3;
            if (mudaSprint == true) {
                this.direita()
                mudaSprint = false
            }
        }
        if (moveCima) {
            person.y = person.y - 3;
            this.cima()
        }
        if (moveBaixo) {
            person.y = person.y + 3;
            this.baixo()
        }
    }
}