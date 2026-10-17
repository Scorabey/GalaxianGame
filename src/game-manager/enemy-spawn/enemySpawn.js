import { CreateEnemy } from "../../entity/index.js";
import { randomInt } from "../../background/index.js";

export const EnemySpawn = ({ enemiesRowCount = 2, enemiesColCount = 4, gap = 10, size = 60, width, board }) => {
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