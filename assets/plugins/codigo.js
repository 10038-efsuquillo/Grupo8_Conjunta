
function mostrarimg(){
  document.getElementById('cont2').innerHTML='<img src="images/firefox.png">';
  }
  
  function grupo() {
      var demo = document.getElementById("grupo");
      demo.style.color = "green";
  }
  
  function myFunction() {
      var x = document.getElementsByClassName("example");
      x[0].innerHTML = "Hola Mundo";
  }   
  
  function addText() {
      var para = document.getElementsByName("demoPara");
      para[0].innerHTML="Texto cambiado!";
      para[1].innerHTML = "El grupo 03 "
        + "ha realizado esto con JavaScript";
  }
  
  function displayPhrase()
  {
      document.getElementById("p1").innerHTML = "Este texto fue remplazado";
  }
  
  function formsfuncion() {
    var items = document.getElementsByClassName("item1");
    var boton = document.getElementById("btnCambiarColor");
  
    // Función para cambiar el color de los elementos
    function cambiarColor() {
      for (var i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "yellow";
      }
    }
  
    // Asignar el evento clic al botón
    boton.addEventListener("click", cambiarColor);
  }
  
    var items = document.querySelectorAll(".item2");
      var btnCambiarEstilo = document.getElementById("btnCambiarEstilo");
      var btnCambiarTamaño = document.getElementById("btnCambiarTamaño");
      var colorOriginal = true;
      var tamañoOriginal = true;
  
      btnCambiarEstilo.addEventListener("click", function() {
        if (colorOriginal) {
          items.forEach(function(item) {
            item.style.color = "red";
          });
          colorOriginal = false;
        } else {
          items.forEach(function(item) {
            item.style.color = "";
          });
          colorOriginal = true;
        }
      });
  
      btnCambiarTamaño.addEventListener("click", function() {
        if (tamañoOriginal) {
          items.forEach(function(item) {
            item.style.fontSize = "24px";
          });
          tamañoOriginal = false;
        } else {
          items.forEach(function(item) {
            item.style.fontSize = "";
          });
          tamañoOriginal = true;
        }
      });
  
  function miAnimacion() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 75) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }
  
  document.getElementById("miBtn").onclick = displayDate;
  function displayDate() {
      document.getElementById("demo").innerHTML = Date();
  }
  
  document.getElementById("miTexto").onclick = cambiarTexto;
  function cambiarTexto() {
      document.getElementById("miTexto").innerHTML = "Haz cambiado el texto :D!";
  }
  
  document.getElementById("miTexto2").ondblclick = cambio_dblclick;
  function cambio_dblclick() {
      document.getElementById("miTexto2").innerHTML = "Haz clickeado 2 veces";
  }
  
  document.getElementById("input_keydown").onkeydown = cambio_onkeydown;
  function cambio_onkeydown(){
    document.getElementById("miTexto3").innerHTML = "Presionaste el Enter! Cuidado! xD";
  }
  
  document.getElementById("input_keyup").onkeyup = cambio_onkeyup;
  function cambio_onkeyup(){
    document.getElementById("miTexto4").innerHTML = "Cuidado! Tampoco tan fuerte! xD";
  }
  
  document.getElementById("input_onchange").onchange = form_change;
  var cont = 0;
  function form_change() {
    cont++;
    var mensaje = document.getElementById("miTexto5");
    if (cont % 3 === 1) {
      mensaje.style.color = 'red';
    } else if (cont % 3 === 2) {
      mensaje.style.color = 'blue';
    } else {
      mensaje.style.color = 'green';
    }
  
    mensaje.textContent = 'El valor ha cambiado (' + cont + ')';
  }
  
  document.getElementById("input_onfocus").onfocus = form_focus;
  function form_focus() {
    document.getElementById("input_onfocus").style.background = "yellow";
  }
  
  document.getElementById("miBoton").addEventListener("click",adel_click);
  function adel_click(){
    document.getElementById("miTexto8").innerHTML = "Se ha reconocido el evento click! :D";
  }
  
  document.getElementById("miBtn2").addEventListener("click", function() {
    alert("Hello World!");
  });
  
  intro.style.backgroundColor = '#00FFFF';