import { Meteor } from "./meteor/meteor.js";
import { Star } from './star/star.js'

const COUNT_STAR = 100

export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const body = document.getElementsByTagName("body")[0]

for(let i = 0; i < COUNT_STAR; i++) {
    const size = randomInt(10, 20)
    const object = new Star()

    object.show({
        size,
        color: "#fff",
        x: randomInt(0, window.innerWidth - size), 
        y: randomInt(0, window.innerHeight - size) 
    })

    const star = object.getObject()
    body.appendChild(star)
    star.addEventListener("animationend", () => star.remove())
}

setInterval(() => {
    const size = randomInt(10, 60)
    const object = new Meteor()

    object.show({ 
        size, 
        color: "#fff", 
        x: randomInt(0, window.innerWidth - size), 
        y: randomInt(0, window.innerHeight - size) 
    })

    const meteor = object.getObject()
    body.appendChild(meteor)
    meteor.addEventListener("animationend", () => meteor.remove())
}, 500)