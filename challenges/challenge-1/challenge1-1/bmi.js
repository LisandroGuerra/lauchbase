const name = 'Lisandro';
const weight = 90;
const height = 1.82;

const bmi = weight / (height * height);

if (bmi >= 30) {
    console.log(`${name}, you are overweight.`);
}
else {
    console.log(`${name}, you are not overweight.`);
}
