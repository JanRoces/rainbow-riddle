export function animateColorSquares(currentRow, isMobile) {
  const className = isMobile ? 'color-square-mobile' : 'color-square';

  const colorSquares = document.querySelectorAll(
    `.grid-row:nth-child(${currentRow + 1}) .${className}`
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
