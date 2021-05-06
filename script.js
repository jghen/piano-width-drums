const playSound = (event) => {
    const audio = document.querySelector(`audio[data-key = '${event.keyCode}']`);
    const key = document.querySelector(`div[data-key = '${event.keyCode}']`);
    if(!audio) {return;} // don't care about other letters (window listening)
    audio.currentTime = 0;
    audio.play();

    if (key.classList.contains('dkey')){
        key.classList.add('playing-drums');
    } 
    else if (key.classList.contains("pkey")) {
        key.classList.add('playing-piano');
    }
    else {return;}
    
  };

  
  const removeTransitionDrum = (event) => {
    if (event.propertyName!=='transform') {return;} //skip event if it's not transform
    event.target.classList.remove('playing-drums');
    console.log('drums');
    
  };

  const removeTransitionPiano = (event) => {
    if (event.propertyName!=='transform') {return;} //skip event if it's not transform
    event.target.classList.remove('playing-piano'); 
    console.log('piano');
  };
  
  //target all keys - if transition ends - remove it
  const drumKeys = Array.from(document.querySelectorAll('.dkey'));
  const pianoKeys = Array.from(document.querySelectorAll('.pkey'));
  pianoKeys.forEach(key => key.addEventListener('transitionend',removeTransitionPiano));
  drumKeys.forEach(key => key.addEventListener('transitionend',removeTransitionDrum));
  
  //key pressed - play sound
  window.addEventListener('keydown', playSound); 