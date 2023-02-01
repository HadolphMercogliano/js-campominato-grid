// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle
// - con difficoltà 2 => 81 caselle
// - con difficoltà 3 => 49 caselle

/******************************************************
 *                        CODE ON LOAD                *
 ******************************************************/
const gridEl = document.getElementById("grid");
console.log(gridEl);

const playButtonEl = document.getElementById("play-button");

const difficultyEasy = 100;
const difficultyNormal = 81;
const difficultyHard = 49;
gridGenerator(gridEl, difficultyEasy);
// TODO: creare un bottone

// TODO: creare una funzione che generi la griglia di gioco (parametri {griglia, dimensionemax})
// generare all' interno della griglia una seguenza di numeri da 1 a dimensione

// aggiungere una funzione al click sulla griglia che colora lo sfondo della casella di azzurro
// stampa in console un messaggio con il numero contenuto nella casella

/******************************************************
 *                      FUNCTION                      *
 ******************************************************/

/**
 * generatore di elementi della griglia
 * @param {string} grid dove inserire le card
 * @param {int} dimension quante card creare
 */
function gridGenerator(grid, dimension) {
  for (let i = 0; i < dimension; i++) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("grid-element");
    cardEl.innerHTML = i + 1;
    gridEl.append(cardEl);

    console.log(cardEl);

    cardEl.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
}
