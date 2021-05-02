function myFunction() {
   console.log("Funciona");
   var x = document.getElementById("miServicio");
   
    document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-48.png";
    document.getElementById("cambiarImagen0").src="imagenes/ELEMENTOS-40.png";

    x.style.display = "block";
   x.style.opacity = "1";
   x.style.left = "25vh";
   x.style.visibility = "visible"
  }
  

  document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('miServicio');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
        document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-41.png";
        document.getElementById("cambiarImagen0").src="imagenes/ELEMENTOS-49.png";
    }
});


function myFunction2() {
    console.log("Funciona");
  
     document.getElementById("cambiarImagen2").src="imagenes/ELEMENTOS-47.png";
 
   }
  