// const fTemp = 100

// function convertTemp(temp) {
//   return (temp - 32) * 5/9
// }

// console.log(convertTemp(fTemp))

/*
Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F"
Call that function for a few different scores and log the result to make sure it works.
*/

// function assignGrade(numberScore)
// return A 100 B 80 C 70 D 60 F 50

// function assignGrade(numberScore) {
//   if (numberScore >= 90) {
//     return 'A'
//   }
//   else if (numberScore >= 80) {
//     return 'B'
//   }
//   else if (numberScore >= 70) {
//     return 'C'
//   }
//   else if (numberScore >= 60) {
//     return 'D'
//   } else {
//     return 'F'
//   }
// } 

// console.log(assignGrade(120))

// function assignGrade(numberScore) {
//   if (numberScore >= 90) {
//     return 'A'
//   }
//   else if (numberScore >= 80) {
//     return 'B'
//   }
//   else if (numberScore >= 70) {
//     return 'C'
//   }
//   else if (numberScore >= 60) {
//     return 'D'
//   } else {
//     return 'F'
//   }
// }

// console.log(assignGrade(50))

function assignGrade(numberScore) {
  switch (true) {
    case numberScore >= 90:
      return "A";
    case numberScore >= 80:
      return "B";
    case numberScore >= 70:
      return "C";
    case numberScore >= 60:
      return "D";
    default:
      return "F";
  }
}

console.log(assignGrade(100))

