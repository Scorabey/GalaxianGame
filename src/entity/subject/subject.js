export class Subject {
    #id
    constructor() {
        this.#id = document.createElement("div")
    }

    show({ size, x, y }) {
        this.#id.classList.add("subject")
        this.#id.style.height = `${size}px`
        this.#id.style.width = `${size}px`
        this.#id.style.top = `${y}px`
        this.#id.style.left = `${x}px`
    }

    getSubject() {
        return this.#id
    }
}