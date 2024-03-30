({
    "plugins": ["jsdom-quokka-plugin"],
    "jsom":{
        file:"./index.html"
    }
})

function addToDisplay(value) {
    const display = document.getElementById('display');
    display.value = display.value + value;
  }

  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function calculate() {
    const display = document.getElementById('display');
    const result = eval(display.value); 
    display.value = result;
  }


