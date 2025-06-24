function cambiarImagen(elemento, nuevaruta) {
    elemento.src = nuevaruta;
}

function volverImagen(elemento, rutaOriginal) {
    elemento.src = rutaOriginal;
}

function actualizarReloj() {
  const ahora = new Date();

  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const diaSemana = dias[ahora.getDay()];
  const dia = ahora.getDate();
  const mes = meses[ahora.getMonth()];
  const año = ahora.getFullYear();

  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();
  let periodo = "AM";

  if (horas >= 12) {
    periodo = "PM";
    if (horas > 12) horas -= 12;
  }
  if (horas === 0) horas = 12;

  // Asegurar que siempre tenga dos dígitos
  horas = horas.toString().padStart(2, "0");
  minutos = minutos.toString().padStart(2, "0");
  segundos = segundos.toString().padStart(2, "0");

  const fecha = `${diaSemana} ${dia} de ${mes} de ${año}`;
  const hora = `${horas}:${minutos}:${segundos} ${periodo}`;

  document.getElementById("reloj").innerHTML = `
    <div>${fecha}</div>
    <div>${hora}</div>
  `;
}

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);
// Mostrar el reloj inmediatamente al cargar
actualizarReloj();
