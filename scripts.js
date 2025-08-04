window.addEventListener("load", () => {
  console.log("🎈 Postal de cumpleaños cargada.");
  
  // Confeti animado 🎉
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#ff69b4', '#dda0dd', '#ffffff', '#ffb6c1']
  });
});
