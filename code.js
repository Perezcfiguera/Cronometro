const time = document.getElementById("timer");
const botonstart = document.getElementById("start");
const botonpause = document.getElementById("pause");
const botonrestart = document.getElementById("restart");
const lista = document.getElementById("vueltas");
const botonVuelta = document.getElementById("guardar")

let intervalo = null;
let hrs = 0;
let min = 0;
let seg = 0;
let mili = 0
let numvuelta = 0

function estilo(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return String(n);
  }
}


function aumentarTiempo() {
  mili += 10; 
  if (mili >= 1000) { 
    mili = 0;
    seg++;
  }

  if (seg === 60) {
    seg = 0;
    min++;
  }

  if (min === 60) {
    min = 0;
    hrs++;
  }

 
    const formato = estilo(hrs) + ":" + estilo(min) + ":" + estilo(seg) + ":" + estilo(mili);

  time.textContent = formato;
}

botonstart.addEventListener("click", function () {
  if (intervalo !== null) return; 
  intervalo = setInterval(aumentarTiempo, 10); 
});


botonpause.addEventListener("click", function () {
  if (intervalo !== null) {
    clearInterval(intervalo);
    intervalo = null;
  }
});


botonrestart.addEventListener("click", function () {
  if (intervalo !== null) {
    clearInterval(intervalo);
    intervalo = null;
  }
  hrs = 0;
  min = 0;
  seg = 0;
  time.textContent = "00:00:00:00";
});


botonVuelta.addEventListener('click', function () {
  if (hrs === 0 && min === 0 && seg === 0 && mili === 0 ) return;

  const formato = estilo(hrs) + ":" + estilo(min) + ":" + estilo(seg) + ":" + estilo(mili);

  
    numvuelta = numvuelta + 1

  const nuevoLi = document.createElement('li');
  nuevoLi.textContent = "vuelta Nro " + numvuelta + " " + formato;
  lista.appendChild(nuevoLi);

 

 
   const borrar = document.createElement("button")
    borrar.textContent = "eliminar"

    borrar.onclick = function () {
      nuevoLi.remove()
    }
 
    nuevoLi.appendChild(borrar)
});
