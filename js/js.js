function myFunction() {
  console.log("Funciona");
  var x = document.getElementById("miServicio");
  //var y = document.getElementById("container-fluid").after;



   document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-48.png";
   document.getElementById("cambiarImagen0").src="imagenes/ELEMENTOS-40.png";
  /*
    y.style.contains="";
    y.style.position = "absolute";
    y.style.top = "0";
    y.style.left = "0";
    y.style.width = "100%";
    y.style.height = "100vh";
    y.style.backgroundImage = "linear-gradient(to right, rgba(255,0,0,0), rgb(49, 119, 199))";
*/
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




function myFunction3() {
 console.log("Funciona");
 var x = document.getElementById("miServicio2");
 
  document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-48.png";
  document.getElementById("cambiarImagen2").src="imagenes/ELEMENTOS-42.png";

  x.style.display = "block";
 x.style.opacity = "1";
 x.style.left = "25vh";
 x.style.visibility = "visible"
 


}
 
document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('miServicio2');
  if (!container.contains(e.target)) {
      container.style.display = 'none';
      document.getElementById("cambiarImagen2").src="imagenes/ELEMENTOS-47.png";
      document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-41.png";
  }
 });




function myFunction2() {
 console.log("Funciona");
 var x = document.getElementById("miServicio3");
 
  document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-48.png";
  document.getElementById("cambiarImagen2").src="imagenes/ELEMENTOS-43.png";

  x.style.display = "block";
 x.style.opacity = "1";
 x.style.left = "25vh";
 x.style.visibility = "visible"
 


}

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById("miServicio3");
  if (!container.contains(e.target)) {
      container.style.display = 'none';
      document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-41.png";
      document.getElementById("cambiarImagen2").src="imagenes/ELEMENTOS-46.png";
  }
 });
 