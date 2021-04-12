let grades = [37, 100, 96, 82, 45, 67]

// let highGrades = grades.filter((grade) => {
//   return grade >= 70
// })

let highGrades = grades.filter(grade => grade >= 70)

// --------------returns first element that matches the criteria 
// let highGrade = grades.find(grade => grade >= 70)

// --------- returns true if some element matches
// let someGrade = grades.some(grade => grade >= 18)



console.log(highGrades) 
// console.log(highGrade) 
// console.log(someGrade)
