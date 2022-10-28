function isValidNumber(input) {
  if (isNaN(parseInt(input))) {
    return false;
  } else if (input < 0) {
    return false;
  } else {
    return true;
  }
}

function isValidName(input) {
  if (input.trim().length === 0) {
    return false;
  } else {
    return true;
  }
}

function toNumberArray(number) {
  let num = number;
  let numArray = [];
  let i = 0;
  while (i <= num) {
    numArray.push(i);
    i++;
  }
  return numArray;
}

function numberSwap(numberArray, name) {
  numberArray.forEach(function(element) {
    let currentNumArray = element.toString().split('');
    let has1 = false;
    let has2 = false;
    let has3 = false;
    currentNumArray.forEach(function(element2) {
      if (parseInt(element2) === 1) {
        has1 = true;
      } else if (parseInt(element2) === 2) {
        has2 = true;
      } else if (parseInt(element2) === 3) {
        has3 = true;
      }
    });
    if (has3) {
      numberArray[element] = '"Won\'t you be my neighbor, ' + name + '?"';
    } else if (has2) {
      numberArray[element] = '"Boop!"';
    } else if (has1) {
      numberArray[element] = '"Beep!"';
    }
  });
  return numberArray.join(', ');
} 

function handleSubmit(event) {
  event.preventDefault();
  const numInput = document.getElementById('numInput').value;
  const nameInput = document.getElementById('nameInput').value;
  if (!isValidNumber(numInput)) {
    document.getElementById('output').innerText = 'PLEASE ENTER A VALID NUMBER!';
    document.getElementById('output').style.color = 'red';
  } else if (!isValidName(nameInput)) {
    document.getElementById('output').innerText = 'PLEASE ENTER A NAME!';
    document.getElementById('output').style.color = 'red';
  } else {
    document.getElementById('output').textContent = numberSwap(toNumberArray(numInput), nameInput);
    document.getElementById('output').style.color = 'white';
  }
}

function handleButton(event) {
  event.preventDefault();
  const numInput = document.getElementById('numInput').value;
  const nameInput = document.getElementById('nameInput').value;
  let output = document.getElementById('output');
  if (output.innerText === '') {
    document.getElementById('output').innerText = 'NOTHING TO REVERSE!';
    document.getElementById('output').style.color = 'red';
  } else if (output.innerText === 'PLEASE ENTER A VALID NUMBER!' || output.innerText === 'PLEASE ENTER A NAME!') {
    document.getElementById('output').innerText = 'NOTHING TO REVERSE!';
    document.getElementById('output').style.color = 'red';
  } else {
    document.getElementById('output').textContent = numberSwap(toNumberArray(numInput).reverse(), nameInput);
    document.getElementById('output').style.color = 'yellow';
  }
}

window.addEventListener('load' , function(){
  let form1 = document.querySelector('form#form1');
  form1.addEventListener('submit' , handleSubmit);
});

window.addEventListener('load' , function(){
  let form2 = document.querySelector('form#form2');
  form2.addEventListener('submit' , handleButton);
});