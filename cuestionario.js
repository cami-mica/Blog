document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-cuestionario');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const r1 = document.getElementById('pregunta1').value.trim();
    const r2 = document.getElementById('pregunta2').value.trim().toLowerCase();
    const r3 = document.getElementById('pregunta3').value.trim().toLowerCase();
    const r4 = document.getElementById('pregunta4').value.trim().toLowerCase();
    const r5 = document.getElementById('pregunta5').value.trim().toLowerCase();

    let puntaje = 0;

    if (r1 === "2") puntaje += 2;
    if (r2 === "agustin" || r2 === "agus") puntaje += 2;
    if (r3 === "new york" || r3 === "nueva york") puntaje += 2;
    if (r4.includes("camila") && r4.includes("peliculas")) puntaje += 2;
    if (r5 === "netflix" || r5 === "twitch") puntaje += 2;

    const resultado = document.getElementById('resultado');
    let mensaje = "";

    if (puntaje === 10) {
      mensaje = "¡Felicitaciones! Obtuviste el puntaje máximo 🎉";
    } else if (puntaje >= 7) {
      mensaje = "¡Muy bien! Casi perfecto 👌";
    } else if (puntaje >= 5) {
      mensaje = "Bien, pero podrías conocernos mejor 😊";
    } else if (puntaje >= 3) {
      mensaje = "Te falta un poco más de atención 🧐";
    } else {
      mensaje = "Tomate un tiempo para ver nuestro blog y conocernos mejor. ¡Hasta pronto!";
    }

    resultado.innerHTML = `<h2>Puntaje: ${puntaje}/10</h2><p>${mensaje}</p>`;
  });
});
