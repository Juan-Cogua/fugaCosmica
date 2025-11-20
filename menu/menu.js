// Guardar volumen
const musica = document.getElementById('musica');

// Intentar recuperar el volumen
let v = Number(localStorage.getItem('volumen'));

// Si NO existe, lo creo por primera vez:
if (isNaN(v)) {
  v = 0.7; // volumen inicial por defecto
  localStorage.setItem('volumen', v);   // <--- AQUÍ SE GUARDA INICIALMENTE
}
console.log(v)

// Aplicar el volumen al audio
musica.volume = v;

