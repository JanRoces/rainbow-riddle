export function animateColorSquares(currentRow) {
  const colorSquares = document.querySelectorAll(
    `.grid-row:nth-child(${currentRow + 1}) .color-square`
  );
  colorSquares.forEach((square, index) => {
    square.classList.add('animate-square');
    square.style.animationDelay = `${index * 0.1}s`;
  });

  setTimeout(() => {
    colorSquares.forEach((square) => {
      square.classList.remove('animate-square');
      square.style.animationDelay = '';
    });
  }, 1000);
}
