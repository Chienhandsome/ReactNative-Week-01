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

johnBMI = calculateBMI(johnMass, johnHeight).toFixed(2);
console.log("John's BMI = " + johnBMI)

markBMI = calculateBMI(markMass, markHeight).toFixed(2);    
console.log("Mark's BMI = " + markBMI)



let result = markBMI > johnBMI ? `Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})` : `John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI})`
console.log(result)

