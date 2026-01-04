function obtenerProximo18() {
  const hoy = new Date();
  let year = hoy.getFullYear();

  const objetivo = new Date(year, 8, 18); // septiembre = 8 mes contado desde 0, asies el año tiene 11 meses

  if (hoy > objetivo) {
    year++;
  }

  return new Date(year, 8, 18);
}
function diasRestantes18() {
  const hoy = new Date();
  const objetivo = obtenerProximo18();
  return Math.ceil((objetivo - hoy) / (1000 * 60 * 60 * 24));
}

module.exports = {
    obtenerProximo18,
    diasRestantes18
};