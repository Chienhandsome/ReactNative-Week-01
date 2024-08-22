let johnMass = 70
let johnHeight = 1.6
let johnBMI

let markMass = 70
let markHeight = 1.8
let markBMI

function calculateBMI(mass, height) {
  BMI = mass / (height * height)
  return BMI;
}

johnBMI = calculateBMI(johnMass, johnHeight)
console.log("John's BMI = " + johnBMI)

markBMI = calculateBMI(markMass, markHeight)
console.log("Mark's BMI = " + markBMI)

let MarkHigherBMI = markBMI > johnBMI
console.log("Mark's BMI is higher than John's BMI? " + MarkHigherBMI)

