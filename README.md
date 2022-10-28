Desciption: isValidNumber()

Test: "Should check to see if the input is a number and return a boolean."
Code: isValidNumber(5)
Expected Output: true

Code: isValidNumber('words')
Expected Output: false

Code: isValidNumber(-5)
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