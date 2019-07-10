function ejercicioDibujo() {
  var mostrarResultado = mostrarResultadoEnElemento(document.getElementById('dibujo'));

  // COMPLETAR
}

function ejercicioDibujo() {
  var mostrarResultado = mostrarResultadoEnElemento(document.getElementById('datos'));

  // COMPLETAR
}



// -----------------------------------
// Funciones auxiliares
// -----------------------------------

function mostrarResultadoEnElemento(dom) {
  return function (resultado) {
    if (typeof resultado === 'string') {
      dom.innerHTML = resultado.replace('\r', '<br>');
    } else {
      dom.innerHTML = JSON.stringify(resultado, null, 2);
    }
  }
}
