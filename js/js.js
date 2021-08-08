
 
//Load numbers when div has reached
function showNumbersIndex(){
  $(window).scroll(function() {
    console.log("ejecutandose")
   var hT = $('#reached').offset().top,
       hH = $('#reached').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
      console.log("reached");
  
      añosExperiencia();
      vehiculosMonitoreados();
      vehiculosRecuperados();
   }
  });
}

//Index page Slider Touch screen

function showSliderApp(){
  $('.b15__mouse').on('click', function(event) {
    console.log("working")
    event.preventDefault();
    $(this).addClass('active')
  });
  
}

//Animated Counter
function vehiculosMonitoreados(){
  const counters = document.querySelectorAll(".autoCount");
  const speed = 30;
  
  counters.forEach(counter => {
     console.log("Ingreso");
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
  
      console.log("ingreso: " + count);
  
      // Lower inc to slow and higher to slow
      const inc = target / speed;
  
  
      // console.log(inc);
      // console.log(count);
      const no = Math.trunc(inc);
      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = count + no;
        // Call function every ms
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
  
    updateCount();
  });
}

function vehiculosRecuperados(){
  const counters2 = document.querySelectorAll(".autoCount2");
  const speed2 = 99;
  
  counters2.forEach(counter => {
    console.log("Ingreso");
   const updateCount = () => {
     const target = +counter.getAttribute('data-target');
  
     const count = +counter.innerText;
  
     console.log("ingreso: " + count);
  
     // Lower inc to slow and higher to slow
     const inc = target / speed2;
  
  
     const no = Math.trunc(inc);
     // console.log(inc);
     // console.log(count);
  
     // Check if target is reached
     if (count < target) {
       // Add inc to count and output in counter
       counter.innerText = count + no;
       // Call function every ms
       setTimeout(updateCount, 99);
     } else {
       counter.innerText = target;
     }
   };
  
   updateCount();
  });
  
}


function añosExperiencia(){
  const counters3 = document.querySelectorAll(".autoCount3");
  const speed3 = 11;
  console.log('--------- INICIO METODO ------ ' + counters3);
  
  counters3.forEach(counter => {
  
  console.log("Ingreso counter" + counter.innerText);
    const updateCount = () => {  
     const target =+ counter.getAttribute('data-target');
  
     const count =+counter.innerText;
  
     console.log("ingreso añis experiencia: " + count);
  
     // Lower inc to slow and higher to slow
     const inc = target / speed3;
  
     const no = Math.trunc(inc);
     // console.log(inc);
     // console.log(count);
  
     // Check if target is reached
     if (count < target) {
       // Add inc to count and output in counter
        counter.innerText = count + no;
       // Call function every ms
       setTimeout(updateCount, 1000); 
       
     } else {
      counter.innerText = target;
     }

    

   };
  
   updateCount();
  
  });

   
  

}


// slider Nosotros
function sliderNosotros(){
  const sdSliderContainer = document.querySelector('.slider-container');
  const sdSlider = document.querySelector('.slider');
  const sdSliderInnerBox = document.querySelectorAll('.slider-innerbox');
  
  let pressed = false;
  let startx;
  let x;
  
  
  // mouse event 
  
  sdSliderContainer.addEventListener('mousedown', (e)=>{
     pressed = true;
     startx = e.offsetX - sdSlider.offsetLeft;
     sdSliderContainer.style.cursor = 'grabbing';
  });
  sdSliderContainer.addEventListener('mouseenter', ()=>{
     sdSliderContainer.style.cursor = 'grab';
  });
  sdSliderContainer.addEventListener('mouseup', ()=>{
     sdSliderContainer.style.cursor = 'grab';
  });
  window.addEventListener('mouseup', ()=>{
     pressed = false;
  });
  sdSliderContainer.addEventListener('mousemove', (e)=>{
     if(!pressed) return
     e.preventDefault();
  
     x = e.offsetX
  
     sdSlider.style.left = `${x - startx}px`;
  
     checkboundary();
  });
  
  
  // touch event 
  sdSliderContainer.addEventListener('touchstart', (e)=>{
     pressed = true;
     startx = e.touches[0].clientX - sdSlider.offsetLeft;
  });
  
  window.addEventListener('touchend', ()=>{
     pressed = false;
  });
  sdSliderContainer.addEventListener('touchmove', (e)=>{
     if(!pressed) return
     e.preventDefault();
  
     x = e.touches[0].clientX;
  
     sdSlider.style.left = `${x - startx}px`;
  
     checkboundary();
  });
  
  function checkboundary(){
     let outer = sdSliderContainer.getBoundingClientRect();
     let inner = sdSlider.getBoundingClientRect();
  
     if(parseInt(sdSlider.style.left) > 0){
        sdSlider.style.left = '0px';
     }else if(inner.right < outer.right){
        sdSlider.style.left = `-${inner.width - outer.width}px`
     }
  };
}
 


function myFunction() {
  console.log("Funciona");
  var x = document.getElementById("miServicio");
  //var y = document.getElementById("container-fluid").after;

  var y = document.getElementById("layer");


   document.getElementById("cambiarImagen").src="imagenes/icono-servicios-azul.png";
   document.getElementById("cambiarImagen0").src="imagenes/icono-inicio-aplicacion-gps.png";
 

  y.style.backgroundImage = "url('imagenes/fondo-azul-marino.png') ";
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
      document.getElementById("cambiarImagen").src="imagenes/icono-servicios-blanco.png";
      document.getElementById("cambiarImagen0").src="imagenes/icono-inicio-aplicacion-gps-azul.png";
      y = document.getElementById("layer");
      y.style.backgroundImage = "none";
      y.style.width = "0%";
      y.style.height = "0%";
    
     
     
  }
   } 
});



function myFunction3() {
 console.log("Funciona");
 var x = document.getElementById("miServicio2");
 var y = document.getElementById("layer");
  document.getElementById("cambiarImagen").src="imagenes/icono-servicios-azul.png";
  document.getElementById("cambiarImagen2").src="imagenes/icono-nosotros-blanco.png";

  y.style.backgroundImage = "url('imagenes/fondo-azul-marino.png') ";
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
  var container = document.getElementById("miServicio2");


    if(container){
      if (!container.contains(e.target)) {
      
        container.style.display = 'none';
        document.getElementById("cambiarImagen").src="imagenes/icono-servicios-blanco.png";
        document.getElementById("cambiarImagen2").src="imagenes/icono-nosotros-azul.png";
        y = document.getElementById("layer");
        y.style.backgroundImage = "none";
  
    }
    }

  
 });
 



function myFunction2() {
 console.log("Funciona");
 var x = document.getElementById("miServicio3");
 var y = document.getElementById("layer");
  document.getElementById("cambiarImagen").src="imagenes/icono-servicios-azul.png";
  document.getElementById("cambiarImagen2").src="imagenes/icono-nosotros-blanco.png";

  y.style.backgroundImage = "url('imagenes/fondo-azul-marino.png') ";
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
        document.getElementById("cambiarImagen").src="imagenes/icono-servicios-blanco.png";
        document.getElementById("cambiarImagen2").src="imagenes/icono-contactanos-azul.png";
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

   document.getElementById("cambiarImagen").src="imagenes/icono-servicios-azul.png";
   document.getElementById("cambiarImagen2").src="imagenes/icono-inicio-aplicacion-gps.png";

   z.style.zIndex = "initial";
   y.style.backgroundImage = "url('imagenes/fondo-azul-marino.png') ";
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
       document.getElementById("cambiarImagen").src="imagenes/icono-inicio-aplicacion-gps.png";
       document.getElementById("cambiarImagen2").src="imagenes/icono-inicio-aplicacion-gps-azul.png";
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

     document.getElementById("cambiarImagen").src="imagenes/icono-servicios-azul.png";


    y.style.backgroundImage = "url('imagenes/fondo-azul-marino.png') ";
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
         document.getElementById("cambiarImagen").src="imagenes/icono-servicios-blanco.png";
     
         y = document.getElementById("layer");
         y.style.backgroundImage = "none";
     }
    }
    });
  

    /*-------------Section 5--------------------*/
    
  
    function displayDescription() {
      console.log("Funciona");
      var x = document.getElementById("question1");
      var y = document.getElementById('question2');
      var z= document.getElementById('question3');
      var k= document.getElementById('question4');
      var j= document.getElementById('question5');

      
      x.style.display  = "block";
      y.style.display = 'none';
      z.style.display = 'none';
      k.style.display = 'none';
      j.style.display = 'none';
     }
     
    
     
   document.addEventListener('mouseup', function(e) {
      var container = document.getElementById('question1');
      

      if(container){
        if (!container.contains(e.target)) {
            container.style.display = 'none';
            console.log("out")
        
        }

    }
    
   });
   
   /*-------------------*/ 
   
   function displayDescription2() {
      console.log("Funciona");
      var x = document.getElementById("question2");
      var y = document.getElementById('question1');
      var z= document.getElementById('question3');
      var k= document.getElementById('question4');
      var j= document.getElementById('question5');

      
      x.style.display  = "block";
      y.style.display = 'none';
      z.style.display = 'none';
      k.style.display = 'none';
      j.style.display = 'none';
    
  
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

      var x = document.getElementById("question2");
      var y = document.getElementById('question1');
      var z= document.getElementById('question3');
      var k= document.getElementById('question4');
      var j= document.getElementById('question5');

      
      z.style.display  = "block";
      y.style.display = 'none';
      x.style.display = 'none';
      k.style.display = 'none';
      j.style.display = 'none';
    

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
      var y = document.getElementById('question1');
      var z= document.getElementById('question3');
      var k= document.getElementById('question2');
      var j= document.getElementById('question5');

      x.style.display = 'block';
      z.style.display  = "none";
      y.style.display = 'none';
      k.style.display = 'none';
      j.style.display = 'none';
    
     }
     
     
   document.addEventListener('mouseup', function(e) {
      var container = document.getElementById('question4');

      if(container){

      
      if (!container.contains(e.target)) {
          container.style.display = 'none';
       
      }
    }
   });
  
    /*-------------------*/ 
   
    function displayDescription5() {
      console.log("Funciona");
      var x = document.getElementById("question5");
      var j = document.getElementById("question4");
      var y = document.getElementById('question1');
      var z= document.getElementById('question3');
      var k= document.getElementById('question2');
    

      z.style.display  = "none";
      y.style.display = 'none';
      k.style.display = 'none';
      j.style.display = 'none';
      x.style.display  = "block";
     }
     
   document.addEventListener('mouseup', function(e) {
      var container = document.getElementById('question5');

      if(container){
        if (!container.contains(e.target)) {
          container.style.display = 'none';
       
      } 
      }
    
       
   });
  
  
    /*-------------End of Section 5--------------------*/
  
