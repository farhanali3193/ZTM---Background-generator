var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var h3 = document.querySelector('h3');
var body = document.querySelector('body');
var styles = getComputedStyle(body);
var initialBackgorund = styles.backgroundImage;
h3.textContent = initialBackgorund;

function setGradient(){
    body.style.backgroundImage = 'linear-gradient(to right, ' + color1.value + ', '  + color2.value + ')';
    h3.textContent = body.style.backgroundImage + ';'; 
}
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);  

var randomButton = document.querySelector('#random');

function colorGenerator(){
    function random(){
        let num = Math.floor(Math.random()*16);
        return num.toString(16);
      }
    
    function hexGenerator(){
        let hex = '#';
        for(var i = 0; i<6; i++){
          hex+= random();
        }
        return hex;
      }

    color1.value = hexGenerator();
    color2.value = hexGenerator();
    setGradient();
}

randomButton.addEventListener('click', colorGenerator);



