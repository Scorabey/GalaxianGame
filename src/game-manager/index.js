import { GameManager } from "./manager/manager.js"

const SIZE = 60
const ENEMIES_ROW_COUNT = 2
const ENEMIES_COL_COUNT = 10
const GAP = 10
const hardLvl = 4
const rate = 50;
const gameOverText = document.getElementById("game-over")
const gameWinText = document.getElementById("game-win")
const board = document.getElementById("board")


const gameManager = new GameManager(board)

export const Game = () => {
    let intervalId;

    const game = {
        stop: () => {
            gameWinText.classList.add("hidden")
            gameOverText.classList.add("hidden")
            gameManager.destroyGame({ intervalId })
            intervalId = null
        },
        start: () => {
            if(intervalId) return

            gameWinText.classList.add("hidden")
            gameOverText.classList.add("hidden")

            gameManager.createWarrior({
                size: SIZE
            })
            gameManager.createEnemys({
                enemiesColCount: ENEMIES_COL_COUNT,
                enemiesRowCount: ENEMIES_ROW_COUNT,
                gap: GAP,
                size: SIZE
            })

            intervalId = setInterval(() => {

                gameManager.playerLose({ hardLvl })
                gameManager.bulletsOverMap()
                gameManager.bulletHitEnemy()

                if(gameManager.gameWin) {
                    clearInterval(intervalId)
                    intervalId = null
                    gameManager.destroyGame({ intervalId })
                    gameWinText.classList.remove("hidden")
                }

                if(gameManager.gameLose) {
                    clearInterval(intervalId)
                    intervalId = null                    
                    gameManager.destroyGame({ intervalId })
                    gameOverText.classList.remove("hidden")
                }
            }, rate)
        },
        restart: () => {
            game.stop()
            game.start()
        }
    }

    return game
}