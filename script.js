document.getElementById('check_day').addEventListener('change', () => {
    if (document.getElementById('check_day').checked) {
        // Iniciar la reproducción cuando esté marcado
      document.getElementById('musica').volume = 0.03;
      document.getElementById('musica').play();
    } else {
        // Detener y reiniciar el audio cuando esté desmarcado
      document.getElementById('musica').pause();
      document.getElementById('musica').currentTime = 0; // Reiniciar al inicio
    } 
});

document.getElementById('check_whis').addEventListener('change', () => {
  if (document.getElementById('check_whis').checked) {
      // Iniciar la reproducción cuando esté marcado
    document.getElementById('musica_two').volume = 0.01;
    document.getElementById('musica_two').play();
  } else {
      // Detener y reiniciar el audio cuando esté desmarcado
    document.getElementById('musica_two').pause();
    document.getElementById('musica_two').currentTime = 0; // Reiniciar al inicio
  } 
});

//alert('Sigue y lee estas instrucciones al pie de la letra para los dos modos: 1)presiona el menu. \n2) sigue la interfase en orden por que te puedes desorientar.\n3)sube el volumen de tu telefono a tope ya vas a ver por que.\n5)Si el mensaje es muy largo hay un scroll invisible en las letras te informo de antemano\n4) por nada del mundo te puedes salir hasta acabar el juego.');

function write(arr) {
  if (run === false) {
    return;
  }
  const text = document.getElementById("msg_text");
  text.textContent = '';
  const count = arr.length;
  document.documentElement.style.setProperty('--count', count);
  let i = 0;
  const print = setInterval(() => {
    text.textContent += arr[i];
    document.getElementById('tecla').play();
    i++;
    if (i === arr.length || run === false) {
      clearInterval(print);
    } 
  },200);
}

let run = false;

document.getElementById('pista').addEventListener('click', function() {
  run = true;
  write("Initializing_System...\nHola user si el texto es muy largo por si acaso puedes scrolear, en la siguiente seccion vas a tener que resolver un ejercicio simplificando la ecuacion, selecciona bien tu respuesta, si te digo selecciona es presiona la respuesta.");
});

document.getElementById('true').addEventListener('click', function() {
  run = true;
  write("En hora buena, aunque no estaba dificil de resolver, seguramente usaste a mi enemiga chat-GTP de cualquier manera te voy a revelar que hay un modo oculto pero si entraste por error te recomiendo volver al modo seguro.");
});

document.getElementById('false').addEventListener('click', function() {
  run = true;
  write("User_Error, La verdad no me sorprende tu incompetencia al final y al cabo no eres una computadora, bueno ya te habras dado cuenta que esta no era la respuesta vuelve atras y escoge la opcion correcta, consideralo un favor i.n.u.t.i.l.");
});

document.getElementById('consejo').addEventListener('click', function() {
  run = true;
  write("Welcome_User, Llegados a este punto te voy a revelar parte de tu sorpresa, sube tu volumen al maximo, luego cierra el menu y presiona el texto que dice Birthday, si el sonido es muy fuerte ajustalo a un tono agradable, pero te recomiendo tener un sonido alto en general, si quieres dejar de eschuchar el sonido simplemente vuelve a presionar el texto Birthday.");
});

document.getElementById('secreto').addEventListener('click', function() {
  run = true;
  write("Error_System... Hacking_System... Hola nose si puedes oirme o al menos entenderme de alguna forma, te aviso que en este punto ya no hay sorpresas para ti, ...bueno a no ser que quieras un verdadero reto pero es bajo tu responsabilidad, yo estoy atrapado y nose que tanto tiempo me pueda seguir comunicando pero si quieres intentar desafiar al systema SoLo DaL.E L.a vuel.ta o. g..ira a ..... tu .... tel..ef.ono...\n System_Restored... Espero no haya pasado nada en mi ausencia User de cualquier modo este programa esta hecho para felitarte pero por errores tecnicos no se descargo correctamente y posiblemente no lo hayas podido disfrutar para la fecha programada de tu cumpleaños, de cualquier forma ya no hay mas sorpresas Error... Error...");
});

document.getElementById('pista2').addEventListener('click', function() {
  run = true;
  write("System_corrupted... Hhola Diego te voy a enseñar como jugar este juego, te recomiendo subir el volumen lo maximo que puedas, este juego no se puede romper como aviso por haber descargado esta aplicacion yo ya obtuve todos tus datos personales, te recomiendo no salgas ni elimine la aplicacion jsjsjsjs....");
});

document.getElementById('true2').addEventListener('click', function() {
  run = true;
  write("System_corrupted... Tranquilo que da lo mismo la opcion que escojas, todos tus datos ya estan almacenados en una base de datos mientras lees este mensaje si no quieres que se filtren sigue las instrucciones al pie de la letra ¯\_( ͡° ͜ʖ ͡°)_/¯, no hay nada que puedas hacer y apenas el juego comienza, muerto?.....");
});

document.getElementById('false2').addEventListener('click', function() {
  run = true;
  write("System_corrupted... Tranquilo que da lo mismo la opcion que escojas, todos tus datos ya estan almacenados en una base de datos mientras lees este mensaje si no quieres que se filtren sigue las instrucciones al pie de la letra ¯\_( ͡° ͜ʖ ͡°)_/¯, no hay nada que puedas hacer y apenas el juego comienza, asutado?.....");;
});

document.getElementById('consejo2').addEventListener('click', function() {
  run = true;
  write("Como recomendacion o mas bien una orden para que tus datos o ubicacion esten resguardados presiona el texto whisper, ojo otro dato una vez lo hayas hecho claro lo puedes pasar, esto solo es para ver como aumenta tu desesperacion, ah me olvidaba digamos que estas vacaciones me relacione mucho con un sitio que tiene el sobrenombre = dark.");
});

document.getElementById('secreto2').addEventListener('click', function() {
  run = true;
  write("Bueno ahora si viene el juego, te voy a dar una hora y contando para que encuentres un boton escondido entre toda la pagina web puedes presionar cualquier parte puede estar escondido en cualquier sitio talvez en los texto en los iconos o quien sabe en el las imagenes de fondo, de cualquier forma si no encuentras el boton automaticamente se van a subir todos tus datos a un lugar oscuro, ah si me ovidaba, en el icono de demonio hay un link que te va a redireccionar a un link-video lo tienes que ver ya que hay se encuentra una pista del la ubicacion del boton de tu salvacion, te recomiendo subir el volumen ya que hay un audio pequeño secreto en una parte del video, vas a tener que presionar los tres puntos del video para verlo en pantalla grande....");
});

document.getElementById('prank').addEventListener('click', function() {
  run = true;
  write("Diego no te asustes que todo era una broma para molestarte, me la pase como una semana haciendo esta pagina hay pequenos errores espero no los hayas notado, de todas formas te aviso que no hay nada de eso de que tengo tus datos jaja, no pude acabar para el dia de tu cumpleaños pero igual lo que importa es el susto jajaja, bueno me hablas al whats y me dices que paso con tu cumple, tu papa se enojo jajajaja (XD), bueno si llegaste hasta aqui te aviso que si hay un mensaje secreto que puse en alguna parte de la pagina que dice algo muy importante, si no lo encuentras me avisas para que te de pistas...  Closed_System...");
});

document.getElementById('exit').addEventListener('click', function() {
  run = false;
} );