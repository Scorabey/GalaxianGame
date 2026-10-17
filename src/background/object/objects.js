export class BgObjects {
    #id
    constructor() {
        this.#id = document.createElement("div")
    }

    show({ size, y, x }) {
        this.#id.className = "bg__object"
        this.#id.style.height = `${size}px`
        this.#id.style.width = `${size}px`
        this.#id.style.top = `${y}px`
        this.#id.style.left = `${x}px`
    }

    getObject() {
        return this.#id
    }
}