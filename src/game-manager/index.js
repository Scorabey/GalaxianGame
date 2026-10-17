import { randomInt } from "../background/index.js";
import { CreateEnemy, CreateWarrior } from "../entity/index.js";

const EnemySpawn = ({ enemiesRowCount = 2, enemiesColCount = 4, gap = 10, size = 60, width, board }) => {
    let nextId = 0;
    let enemies = [];
    const gridWidth = enemiesColCount * size + (enemiesColCount - 1) * gap
    const offsetX = (width - gridWidth) / 2
    const COLORS = ["#f5a7a7", "#a7e3f5", "#f5f0a7", "#f5a7e8", "#b0f5a7", "#f5a7e2"]

    for(let i = 0; i < enemiesRowCount; i++) {
        for(let j = 0; j < enemiesColCount; j++) {
            const color = COLORS[randomInt(0, COLORS.length - 1)]

            const enemy = CreateEnemy({ 
                board,
                color,
                size, 
                x: offsetX + (size + gap) * j,
                y: (size + gap) * i
            })

            console.log({ i, j, x: offsetX + (size + gap) * j, y: (size + gap) * i })

            enemies.push({ element: enemy, id: nextId++ })
        }
    }
    
    return enemies
}

export class GameManager {
    #gameLose = false
    #gameWin = false
    #enemies = []
    #warrior

    #parent

    #size
    #height
    #width

    constructor(parent) {
        const { width, height } = parent.getBoundingClientRect()
        this.#parent = parent
        this.#height = height
        this.#width = width
    }

    #playerWin() {
        if(this.#enemies.length === 0) {
            this.#gameWin = true
        }
    }

    createWarrior({ size }) {
        this.#warrior = CreateWarrior({
            board: this.#parent,
            width: this.#width,
            height: this.#height,
            size
        })

        this.#size = size
    }

    createEnemys({ size, enemiesRowCount, enemiesColCount, gap }) {
        this.#enemies = EnemySpawn({ 
            width: this.#width, 
            enemiesColCount, 
            enemiesRowCount, 
            gap, 
            size, 
            board: this.#parent 
        })

        this.#size = size
    }

    bulletsOverMap() {
        this.#warrior.bullets.forEach((bullet) => {
            const bulletRect = bullet.getBoundingClientRect()

            if(bulletRect.y <= 0) {
                this.#warrior.class.removeBullet(bullet)
            }
        })
    }

    bulletHitEnemy() {
        this.#enemies.forEach((enemy) => {
            this.#warrior.bullets.forEach((bullet) => {
                const enemyBox = {
                    left: enemy.element.class.x,
                    right: enemy.element.class.x + this.#size,
                    top: enemy.element.class.y,
                    bottom: enemy.element.class.y + this.#size
                }

                const bulletBox = {
                    left: parseFloat(bullet.style.left),
                    right: parseFloat(bullet.style.left) + bullet.offsetWidth,
                    top: parseFloat(bullet.style.top),
                    bottom: parseFloat(bullet.style.top) + bullet.offsetHeight
                }

                const hit =
                    bulletBox.left < enemyBox.right &&
                    bulletBox.right > enemyBox.left &&
                    bulletBox.top < enemyBox.bottom &&
                    bulletBox.bottom > enemyBox.top

                if(hit) {
                    this.#warrior.class.removeBullet(bullet)
                    enemy.element.object.remove()
                    const hitEnemy = enemy.id

                    this.#enemies = this.#enemies.filter((enemy) => enemy.id !== hitEnemy)
                }

                this.#playerWin()
            })
        })
    }

    playerLose({ hardLvl }) {
        this.#enemies.forEach((enemy) => {
            enemy.element.class.move(hardLvl)

            if(enemy.element.class.y > this.#height - this.#size * 2) {
                this.#gameLose = true
            }
        })
    }

    gameOver({ intervalId }) {
        clearInterval(intervalId)

        this.#enemies.forEach((enemy) => enemy.element.object.remove())
        this.#enemies.length = 0

        this.#warrior.object.remove()
        this.#warrior.class.destroy()
        this.#warrior = null
    }

    get gameWin() {
        return this.#gameWin
    }

    get gameLose() {
        return this.#gameLose
    }
}