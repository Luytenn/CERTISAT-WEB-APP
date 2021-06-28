
//Load numbers when div has reached
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
        setTimeout(updateCount, 70);
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
       setTimeout(updateCount, 20);
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
  
  counters3.forEach(counter => {
    console.log("Ingreso");
   const updateCount = () => {
     const target = +counter.getAttribute('data-target');
  
     const count = +counter.innerText;
  
     console.log("ingreso: " + count);
  
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
       setTimeout(updateCount, 100);
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


//Icons Features

function mostrarDesIcon(){ 
  console.log("Ingreso featureIcon1 function");
  
  //Ubicacion en tiempo real
  var x = document.getElementById("showTagIcon1");
  var y = document.getElementById("changeIcon1");
  x.style.visibility = "visible";
  y.style.content = "url('imagenes/ELEMENTOS-78.png')"

  //Mantenimiento
  var z = document.getElementById("showTagIcon2");
  var i = document.getElementById("changeIcon2");

  z.style.visibility = "hidden";
  i.style.content = "url('imagenes/ELEMENTOS-79.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

   //Blqueo desde app
   var showTagIcon6 = document.getElementById("showTagIcon6");
   var changeIcon6 = document.getElementById("changeIcon6");
   showTagIcon6.style.visibility = "hidden";
   changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

   //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}



function mostrarDesIcon2(){
 
  //2-Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "visible";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

  //1.Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"

  //3.Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

   //Blqueo desde app
   var showTagIcon6 = document.getElementById("showTagIcon6");
   var changeIcon6 = document.getElementById("changeIcon6");
   showTagIcon6.style.visibility = "hidden";
   changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

   //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}

function mostrarDesIcon3(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "visible";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

   //Blqueo desde app
   var showTagIcon6 = document.getElementById("showTagIcon6");
   var changeIcon6 = document.getElementById("changeIcon6");
   showTagIcon6.style.visibility = "hidden";
   changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

   //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}

function mostrarDesIcon4(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "visible";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

   //Blqueo desde app
   var showTagIcon6 = document.getElementById("showTagIcon6");
   var changeIcon6 = document.getElementById("changeIcon6");
   showTagIcon6.style.visibility = "hidden";
   changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

   //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}

function mostrarDesIcon5(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "visible";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";
  
  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}

function mostrarDesIcon6(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "visible";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}

function mostrarDesIcon7(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "visible";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}


function mostrarDesIcon8(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "visible";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}

function mostrarDesIcon9(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "visible";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}

function mostrarDesIcon10(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "visible";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}


function mostrarDesIcon11(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "visible";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}

function mostrarDesIcon12(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "visible";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";

}

function mostrarDesIcon13(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "visible";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";

}

function mostrarDesIcon14(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "visible";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";
}

function mostrarDesIcon15(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "visible";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";
  
  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";

}

function mostrarDesIcon16(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "visible";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";

}

function mostrarDesIcon17(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "visible";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";

}

function mostrarDesIcon18(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "visible";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

  //Geocercas
  document.getElementById("showTagIcon19").style.visibility = "hidden";
  document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

  //Reporte grafico de posiciones
  document.getElementById("showTagIcon20").style.visibility = "hidden";
  document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

  //Reporte historico recorrido
  document.getElementById("showTagIcon21").style.visibility = "hidden";
  document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

  //Retransmision a sutran
  document.getElementById("showTagIcon22").style.visibility = "hidden";
  document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";

}


function mostrarDesIcon19(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

   //Geocercas
   document.getElementById("showTagIcon19").style.visibility = "visible";
   document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

   //Reporte grafico de posiciones
   document.getElementById("showTagIcon20").style.visibility = "hidden";
   document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

   //Reporte historico recorrido
   document.getElementById("showTagIcon21").style.visibility = "hidden";
   document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

   //Retransmision a sutran
   document.getElementById("showTagIcon22").style.visibility = "hidden";
   document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";

}

function mostrarDesIcon20(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

   //Geocercas
   document.getElementById("showTagIcon19").style.visibility = "hidden";
   document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

   //Reporte grafico de posiciones
   document.getElementById("showTagIcon20").style.visibility = "visible";
   document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

   //Reporte historico recorrido
   document.getElementById("showTagIcon21").style.visibility = "hidden";
   document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

   //Retransmision a sutran
   document.getElementById("showTagIcon22").style.visibility = "hidden";
   document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";

}

function mostrarDesIcon21(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

   //Geocercas
   document.getElementById("showTagIcon19").style.visibility = "hidden";
   document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

   //Reporte grafico de posiciones
   document.getElementById("showTagIcon20").style.visibility = "hidden";
   document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

   //Reporte historico recorrido
   document.getElementById("showTagIcon21").style.visibility = "visible";
   document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

   //Retransmision a sutran
   document.getElementById("showTagIcon22").style.visibility = "hidden";
   document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";

}

function mostrarDesIcon22(){
 
  //Mantenimiento
  var x = document.getElementById("showTagIcon2");
  var y = document.getElementById("changeIcon2");
  x.style.visibility = "hidden";
  y.style.content = "url('imagenes/ELEMENTOS-79.png')"

//Ubicacion en tiempo real
  var showTagIcon1 = document.getElementById("showTagIcon1");
  var changeIcon1 = document.getElementById("changeIcon1");
  showTagIcon1.style.visibility = "hidden";
  changeIcon1.style.content = "url('imagenes/ELEMENTOS-78.png')"


  //Instalacion en casa
  var showTagIcon3 = document.getElementById("showTagIcon3");
  var changeIcon3 = document.getElementById("changeIcon3");
  showTagIcon3.style.visibility = "hidden";
  changeIcon3.style.content = "url('imagenes/ELEMENTOS-80.png')"

  //recupero de Vehiculo
  var showTagIcon4 = document.getElementById("showTagIcon4");
  var changeIcon4 = document.getElementById("changeIcon4");
  showTagIcon4.style.visibility = "hidden";
  changeIcon4.style.content = "url('imagenes/ELEMENTOS-84.png')"

  //App Movil
  var showTagIcon5 = document.getElementById("showTagIcon5");
  var changeIcon5 = document.getElementById("changeIcon5");
  showTagIcon5.style.visibility = "hidden";
  changeIcon5.style.content = "url('imagenes/ELEMENTOS-85.png')"

  //Blqueo desde app
  var showTagIcon6 = document.getElementById("showTagIcon6");
  var changeIcon6 = document.getElementById("changeIcon6");
  showTagIcon6.style.visibility = "hidden";
  changeIcon6.style.content = "url('imagenes/ELEMENTOS-81.png')"

  //Central de monitoreo
  var showTagIcon7 = document.getElementById("showTagIcon7");
  var changeIcon7 = document.getElementById("changeIcon7");
  showTagIcon7.style.visibility = "hidden";
  changeIcon7.style.content = "url('imagenes/ELEMENTOS-83.png')"

  //Alerta de desconexión de bateria
  var showTagIcon8 = document.getElementById("showTagIcon8");
  var changeIcon8 = document.getElementById("changeIcon8");
  showTagIcon8.style.visibility = "hidden";
  changeIcon8.style.content = "url('imagenes/ELEMENTOS-82.png')"

  //App Movil
  document.getElementById("showTagIcon9").style.visibility = "hidden";
  document.getElementById("changeIcon9").style.content = "url('imagenes/ELEMENTOS-85.png')";

  //Ubicacion en tiempo real
  document.getElementById("showTagIcon10").style.visibility = "hidden";
  document.getElementById("changeIcon10").style.content = "url('imagenes/ELEMENTOS-78.png')";

  //Mantenimiento
  document.getElementById("showTagIcon11").style.visibility = "hidden";
  document.getElementById("changeIcon11").style.content = "url('imagenes/ELEMENTOS-79.png')";

  //Recupero de vehiculo
  document.getElementById("showtagIcon11-5").style.visibility = "hidden";
  document.getElementById("changeIcon12").style.content = "url('imagenes/ELEMENTOS-87.png')";

  //Instalacion en casa
  document.getElementById("showTagIcon12").style.visibility = "hidden";
  document.getElementById("changeIcon13").style.content = "url('imagenes/ELEMENTOS-86.png')";

  //Central de monitoreo
  document.getElementById("showTagIcon14").style.visibility = "hidden";
  document.getElementById("changeIcon14").style.content = "url('imagenes/ELEMENTOS-96.png')";

  //Bloqueo desde app
  document.getElementById("showTagIcon15").style.visibility = "hidden";
  document.getElementById("changeIcon15").style.content = "url('imagenes/ELEMENTOS-81.png')";

  //Acceso a plataforma
  document.getElementById("showTagIcon16").style.visibility = "hidden";
  document.getElementById("changeIcon16").style.content = "url('imagenes/ELEMENTOS-94.png')";

  //Boton de panico
  document.getElementById("showTagIcon17").style.visibility = "hidden";
  document.getElementById("changeIcon17").style.content = "url('imagenes/ELEMENTOS-91.png')";

  //Boton de panico
  document.getElementById("showTagIcon18").style.visibility = "hidden";
  document.getElementById("changeIcon18").style.content = "url('imagenes/ELEMENTOS-92.png')";

   //Geocercas
   document.getElementById("showTagIcon19").style.visibility = "hidden";
   document.getElementById("changeIcon19").style.content = "url('imagenes/ELEMENTOS-93.png')";

   //Reporte grafico de posiciones
   document.getElementById("showTagIcon20").style.visibility = "hidden";
   document.getElementById("changeIcon20").style.content = "url('imagenes/ELEMENTOS-97.png')";

   //Reporte historico recorrido
   document.getElementById("showTagIcon21").style.visibility = "hidden";
   document.getElementById("changeIcon21").style.content = "url('imagenes/ELEMENTOS-98.png')";

   //Retransmision a sutran
   document.getElementById("showTagIcon22").style.visibility = "visible";
   document.getElementById("changeIcon22").style.content = "url('imagenes/ELEMENTOS-97.png')";

}





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
  
