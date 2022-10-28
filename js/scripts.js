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
  } else if (!isValidName(nameInput)) {
    document.getElementById('output').innerText = 'PLEASE ENTER A NAME!';
  } else {
    document.getElementById('output').innerText = numberSwap(toNumberArray(numInput), nameInput);
  }
}

window.addEventListener("load" , function(){
  let form = document.querySelector("form");
  form.addEventListener("submit" , handleSubmit);
});