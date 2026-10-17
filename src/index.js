import "./background/index.js";
import { Game } from './game-manager/index.js'

const restartBtn = document.getElementById("btn-restart")

const game = Game()

game.start()

restartBtn.addEventListener("click", () => {
    game.start()
})