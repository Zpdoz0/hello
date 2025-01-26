function write(arr) {
    if (run === false) {
      return;
    }
    const text = document.getElementById("msg_text");
    text.textContent = '';
    const count = arr.length;
    document.documentElement.style.setProperty('--count', count);
    document.getElementById('tecla').volume = 1;
    let i = 0;
    const print = setInterval(() => {
      text.textContent += arr[i];
      document.getElementById('tecla').currentTime = 0;
      document.getElementById('tecla').play();
      i++;
      if (i === arr.length || run === false) {
        clearInterval(print);
      } 
    },200);
  }
  
  let run = false;
  
  document.getElementById('secret').addEventListener('click', function() {
    run = true;
    write("Initializing_System...\nBueno encontraste el msg secreto, la verdad me va a a dar pena decirte algo asi por mensaje, pero tambien la respuesta era muy obvia, el msg es: ...Corrupted_System... . . . . . . . . . . . . . . . . ...Saved_System... el msg es: !Algo muy importante!, ...Fauled_System...., (XD) jajajaja  felices 19, espero te hayas divertido y ya no hay mas contenido extra, suerte y adios.");
  });

  document.getElementById('exit').addEventListener('click', function() {
    run = false;
  } );
  