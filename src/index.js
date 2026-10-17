import "./background/index.js";
import { GameManager } from "./game-manager/index.js";

const SIZE = 60
const ENEMIES_ROW_COUNT = 2
const ENEMIES_COL_COUNT = 10
const GAP = 10
const hardLvl = 4
const gameOverText = document.getElementById("game-over")
const gameWinText = document.getElementById("game-win")
const board = document.getElementById("board")

const gameManager = new GameManager(board)

gameManager.createWarrior({
    size: SIZE
})
gameManager.createEnemys({
    enemiesColCount: ENEMIES_COL_COUNT,
    enemiesRowCount: ENEMIES_ROW_COUNT,
    gap: GAP,
    size: SIZE
})

const intervalId = setInterval(() => {
    const gameWin = gameManager.gameWin
    const gameLose = gameManager.gameLose

    gameManager.playerLose({ hardLvl })
    gameManager.bulletsOverMap()
    gameManager.bulletHitEnemy()

    if(gameWin) {
        gameManager.gameOver({ intervalId })
        gameWinText.classList.remove("hidden")
    }

    if(gameLose) {
        gameManager.gameOver({ intervalId })
        gameOverText.classList.remove("hidden")
    }
}, 50)