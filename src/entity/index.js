import { Enemy } from "./enemy/enemy.js";
import { Warrior } from "./warior/warrior.js";

export const CreateWarrior = ({ size, height, width, board }) => {
    const subject = new Warrior(8, 150)
    subject.show({ size, color: "#fff", x: (width/2) - size, y: height - size })
    subject.move({ size, width })
    const bullets = subject.getBullets()
    const warrior = subject.getSubject()
    board.appendChild(warrior)

    return {class: subject, object: warrior, bullets }
}

export const CreateEnemy = ({ size, x, y, board, color }) => {
    const subject = new Enemy()
    subject.show({ size, color, x, y })
    const enemy = subject.getSubject()
    board.appendChild(enemy)

    return {class: subject, object: enemy}
}