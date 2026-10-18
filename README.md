# 🚀 Galaxian

A browser arcade shooter inspired by the classic *Galaxian*, written in vanilla JavaScript (ES modules, no frameworks). Move your warrior ship, shoot down the entire enemy fleet before it reaches the bottom of the board, and enjoy an animated space background with stars and meteors.

## Features

- **Smooth ship control** with keyboard support (arrows or WASD)
- **Shooting with a cooldown**, so you can't spam bullets
- **Grid of enemies** whose rows, columns, gap and size are configurable
- **Adjustable difficulty** (enemy speed via `hardLvl`)
- **Win / Lose screens** and the ability to start, stop and restart the game
- **Animated background**: randomly generated stars and meteors with CSS animations
- **Clean OOP architecture** using classes and private fields (`#field`)

## Controls

| Action      | Keys                  |
| ----------- | --------------------- |
| Move left   | `←` or `A`            |
| Move right  | `→` or `D`            |
| Shoot       | `Space` or `Enter`    |

Holding the fire key keeps shooting, limited by the warrior's cooldown.

## How to play

1. Start the game.
2. Move your warrior left and right along the bottom of the board.
3. Shoot the enemies. A bullet that hits an enemy destroys both.
4. **You win** when all enemies are destroyed.
5. **You lose** if any enemy gets too close to the bottom of the board.

### Run locally

```bash
# clone the repository
git clone https://github.com/Scorabey/GalaxianGame.git
cd GalaxianGame

# start any static server, for example:
npx serve .
# or
python -m http.server 8000
```

Then open the printed address (e.g. `http://localhost:3000`) in your browser.

## Configuration

You can tweak the gameplay by changing a few constants and constructor arguments:

| Option                                  | Description                                     |
| --------------------------------------- | ----------------------------------------------- |
| `SIZE`                                  | Size of the warrior and enemies                 |
| `ENEMIES_COL_COUNT`, `ENEMIES_ROW_COUNT`| Number of enemy columns and rows                |
| `GAP`                                   | Gap between enemies                             |
| `hardLvl`                               | Enemy movement speed (difficulty)               |
| `rate`                                  | Game loop interval in milliseconds              |
| `new Warrior(step, cooldown)`           | Ship speed per frame and delay between shots    |
| `COUNT_STAR`                            | Number of stars generated in the background     |

Bullets can also be customized via `warrior.shoot({ speed, width, height, color })`.

## Tech stack

- HTML5
- CSS3 (animations for stars and meteors)
- JavaScript (ES2022): modules, classes, private fields, `requestAnimationFrame`
- Inline SVG for the warrior ship
- 
## Author

**Shatilov D. M.**: [@Scorabey](https://github.com/Scorabey)
