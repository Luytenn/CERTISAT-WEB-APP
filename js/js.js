function myFunction() {
  console.log("Funciona");
  var x = document.getElementById("miServicio");
  //var y = document.getElementById("container-fluid").after;

  var y = document.getElementById("layer");


   document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-48.png";
   document.getElementById("cambiarImagen0").src="imagenes/ELEMENTOS-40.png";
 

  y.style.backgroundImage = "url('imagenes/ELEMENTOS-02.png') ";
  y.style.position = "absolute"
  y.style.top = "0";
  y.style.left = "0";
  y.style.width = "100%";
  y.style.height = "100%";
  y.style.zIndex = "999";
   x.style.display = "block";
  x.style.opacity = "1";
  x.style.left = "25vh";
  x.style.visibility = "visible"
 }
 




 document.addEventListener('mouseup', function(e) {
   var container = document.getElementById('miServicio');

   if(container){
     console.log("Existe")
    if (!container.contains(e.target)) {
      container.style.display = 'none';
      document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-41.png";
      document.getElementById("cambiarImagen0").src="imagenes/ELEMENTOS-49.png";
      y = document.getElementById("layer");
      y.style.backgroundImage = "none";
  }
   } 

  
});




function myFunction3() {
 console.log("Funciona");
 var x = document.getElementById("miServicio2");
 var y = document.getElementById("layer");
  document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-48.png";
  document.getElementById("cambiarImagen2").src="imagenes/ELEMENTOS-42.png";

  y.style.backgroundImage = "url('imagenes/ELEMENTOS-02.png') ";
  y.style.position = "absolute"
  y.style.top = "0";
  y.style.left = "0";
  y.style.width = "100%";
  y.style.height = "100%";
  y.style.zIndex = "999";

  x.style.display = "block";
 x.style.opacity = "1";
 x.style.left = "25vh";
 x.style.visibility = "visible"
 


}
 
document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('miServicio2');
  var elementExists = document.getElementById("miServicio2");

  if(elementExists){
    if (!container.contains(e.target)) {
      container.style.display = 'none';

    
      document.getElementById("cambiarImagen2").src="imagenes/ELEMENTOS-47.png";
      document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-41.png";
      y = document.getElementById("layer");
       y.style.backgroundImage = "none";
  }
  }
  
 
 });




function myFunction2() {
 console.log("Funciona");
 var x = document.getElementById("miServicio3");
 var y = document.getElementById("layer");
  document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-48.png";
  document.getElementById("cambiarImagen2").src="imagenes/ELEMENTOS-43.png";

  y.style.backgroundImage = "url('imagenes/ELEMENTOS-02.png') ";
  y.style.position = "absolute"
  y.style.top = "0";
  y.style.left = "0";
  y.style.width = "100%";
  y.style.height = "100%";
  y.style.zIndex = "999";

  x.style.display = "block";
  x.style.opacity = "1";
  x.style.left = "25vh";
  x.style.visibility = "visible"
 


}

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById("miServicio3");


    if(container){
      if (!container.contains(e.target)) {
      
        container.style.display = 'none';
        document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-41.png";
        document.getElementById("cambiarImagen2").src="imagenes/ELEMENTOS-46.png";
        y = document.getElementById("layer");
        y.style.backgroundImage = "none";
  
    }
    }

  
 });
 

 function myFunction4() {
  console.log("Funciona");
  var x = document.getElementById("miServicio4");
  var y = document.getElementById("layer");

  var z = document.getElementById("background-image");

   document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-48.png";
   document.getElementById("cambiarImagen2").src="imagenes/ELEMENTOS-40.png";

   z.style.zIndex = "initial";
   y.style.backgroundImage = "url('imagenes/ELEMENTOS-02.png') ";
  y.style.position = "absolute"
  y.style.top = "0";
  y.style.left = "0";
  y.style.width = "100%";
  y.style.height = "100%";
  y.style.zIndex = "999";

   x.style.display = "block";
  x.style.opacity = "1";
  x.style.left = "25vh";
  x.style.visibility = "visible"
  
 
 
 }
 
 document.addEventListener('mouseup', function(e) {
   var container = document.getElementById("miServicio4");

  if(container){

  

   if (!container.contains(e.target)) {
      console.log("ingreso outclick ")
       container.style.display = 'none';
       document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-40.png";
       document.getElementById("cambiarImagen2").src="imagenes/ELEMENTOS-49.png";
       m = document.getElementById("layer");
       m.style.backgroundImage = "none";
       console.log(" out of range ");

       var z = document.getElementById("background-image");
       z.style.zIndex = "2";
   }

  }
  });


  

  function myFunction5() {
    console.log("Funciona");
    var x = document.getElementById("miServicio5");
    var y = document.getElementById("layer");

     document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-48.png";


    y.style.backgroundImage = "url('imagenes/ELEMENTOS-02.png') ";
    y.style.position = "absolute"
    y.style.top = "0";
    y.style.left = "0";
    y.style.width = "100%";
    y.style.height = "100%";
    y.style.zIndex = "999";

   
     x.style.display = "block";
    x.style.opacity = "1";
    x.style.left = "25vh";
    x.style.visibility = "visible"
    
   


   
   }
   
  

   document.addEventListener('mouseup', function(e) {
     var container = document.getElementById("miServicio5");

    if(container){

  

     if (!container.contains(e.target)) {
         container.style.display = 'none';
         document.getElementById("cambiarImagen").src="imagenes/ELEMENTOS-41.png";
     
         y = document.getElementById("layer");
         y.style.backgroundImage = "none";
     }
    }
    });
  

    /*-------------Section 5--------------------*/
    
  
    function displayDescription() {
      console.log("Funciona");
      var x = document.getElementById("question1");
  
      x.style.display  = "block";
     }
     
    
     
   document.addEventListener('mouseup', function(e) {
      var container = document.getElementById('question1');

      if(container){

      
      if (!container.contains(e.target)) {
          container.style.display = 'none';
       
      }

    }
   });
   
   /*-------------------*/ 
   
   function displayDescription2() {
      console.log("Funciona");
      var x = document.getElementById("question2");
  
    
      x.style.display  = "block";
     }
     
    
     
   document.addEventListener('mouseup', function(e) {
      var container = document.getElementById('question2');
      
      if(container){

     
      if (!container.contains(e.target)) {
          container.style.display = 'none';
       
      } 
    }
   });
  
   /*-------------------*/ 
   
   function displayDescription3() {
      console.log("Funciona");
      var x = document.getElementById("question3");
  
    
      x.style.display  = "block";
     }
     
    
     
   document.addEventListener('mouseup', function(e) {
      var container = document.getElementById('question3');

      if(container){

      
      if (!container.contains(e.target)) {
          container.style.display = 'none';
       
      }}
   });
  
  
   
    /*-------------------*/ 
   
    function displayDescription4() {
      console.log("Funciona");
      var x = document.getElementById("question4");
  
    
      x.style.display  = "block";
     }
     
    
     
   document.addEventListener('mouseup', function(e) {
      var container = document.getElementById('question4');

      if(container ==true){

      
      if (!container.contains(e.target)) {
          container.style.display = 'none';
       
      }}
   });
  
  
    /*-------------------*/ 
   
    function displayDescription5() {
      console.log("Funciona");
      var x = document.getElementById("question5");
  
    
      x.style.display  = "block";
     }
     
    
     
   document.addEventListener('mouseup', function(e) {
      var container = document.getElementById('question5');

      if(container==true){

    
      if (!container.contains(e.target)) {
          container.style.display = 'none';
       
      }  }
   });
  
    

  
    /*-------------End of Section 5--------------------*/
  
