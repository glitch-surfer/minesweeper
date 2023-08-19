# Minesweeper GAME

* Old fashioned game

[deploy](https://glitch-surfer.github.io/minesweeper/)

## used:
- pure JS
- Webpack
- ESlint (air-bnb)
- SCSS

## Key skills
- SPA
- DOM Api
- algorithms
- data structures

### Functional requirements

- responsive layout
- when user click on cells - it opens and marked as one of the following state: empty cell, cell with number, or cell with mine
- the game end when the player reveals all cells that do not contain mines (win) or clicks on mine (lose) and related message is displayed at the end of the game
- mines are placed after the first move, so that user cannot lose on the first move
- user can mark “mined” cells using flags so as not to accidentally open them displaying the number of mines remaining and displaying number of used flags
- the game use color coding (using numbers and colors) to indicate the number of mines surrounding a revealed cell
- the game can be restarted without reloading the page
- game duration and number of clicks are displayed
- when user opens a square that does not touch any mines, it will be empty and the adjacent squares will automatically open in all directions until reaching squares that contain numbers
- sound accompaniment (on/off) when clicking on cell and at the end of the game
- implement ability to change the size (easy - 10x10, medium - 15x15, hard - 25x25) and number of mines for each size of the field (from 10 to 99)
- implemented saving the latest 10 results using LocalStorage
- implemented saving the state of the game after reload page
- save/load game at every moment with saming all context (timer, open cells, etc)
- option to choose different themes for the game board (dark/light themes)

### Enjoy😎 

