const puzzleContainer = document.getElementById("puzzle-container");
const mensajeFinal = document.getElementById("mensaje-final");

// Crear array de posiciones 0–8
let positions = [...Array(9).keys()];

// Mezcla inicial
positions = positions.sort(() => Math.random() - 0.5);

function renderPuzzle() {
  puzzleContainer.innerHTML = "";
  positions.forEach((pos, index) => {
    const piece = document.createElement("div");
    piece.className = "piece";
    piece.style.backgroundPosition = `${-(pos % 3) * 100}px ${-Math.floor(pos / 3) * 100}px`;
    piece.dataset.index = index;
    puzzleContainer.appendChild(piece);
    piece.onclick = () => swap(index);
  });
}

let selected = null;

function swap(index) {
  if (selected === null) {
    selected = index;
    puzzleContainer.children[index].style.border = "2px solid #000";
  } else {
    // Intercambiar
    [positions[selected], positions[index]] = [positions[index], positions[selected]];
    selected = null;
    renderPuzzle();
    checkWin();
  }
}

function checkWin() {
  const isCorrect = positions.every((val, i) => val === i);
  if (isCorrect) {
    mensajeFinal.style.display = "block";
  }
}

renderPuzzle();
