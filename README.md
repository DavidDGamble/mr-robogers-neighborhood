# _Mr. Roboger's Neighborhood_

#### By _**David Gamble**_

#### _Takes an input number and then prints out all of the numbers counting up to the input replacing certain numbers with words._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_

## Description

_This is a website that will take in a number by the user and display a list of the numbers starting at 0 and counting up to the input.  It will also replace all numbers containing a 3 with "Won't you be my neighbor?", all numbers containing the number 2 with "Boop!", and all numbers containing the number 1 with "Beep!" in that hierarchy. 

## Setup/Installation Requirements

* _Clone the project to your desktop from GitHub._
* _Open the index.html file to view website._

_GitHub location https://github.com/DavidDGamble/mr-robogers-neighborhood.git_

## Known Bugs

* _No known bugs._

## License

_Copyright (c) 2022 David Gamble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

```
Desciption: isValidNumber()

Test: "Should check to see if the input is a number and return a boolean."
Code: isValidNumber(5)
Expected Output: true

Code: isValidNumber('words')
Expected Output: false

Code: isValidNumber(-5)
Expected Output: false

Description: isValidName()

Test: "Should check to see if a name was entered into the input."
Code: isValidName('david')
Expected Output: true

Code: isValidName('')
Expected Output: false


Description: toNumberArray()

Test: "Should take the input number and turn it into an array containing each number counting up to and including the input number starting at 0."
Code: toNumberArray(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Description: numberSwap()

Test: "Should take input array of numbers and swap numbers containing 3 with "Won't you be my neighbor?", numbers containing 2 with "Boop!", and numbers containing 1 with "Beep!" in that heirarchy."
Code: numberSwap([0, 1, 2, 3, 4, 5])
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5

Code: numberSwap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
Expected Output: 0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"
```