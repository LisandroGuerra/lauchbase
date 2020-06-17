const name = 'Lisandro';
const gender = 'M';
const age = 49;
const contribution = 31;

const minContributionMale = 35;
const minContributionFemale = 30;
const minPointsMale = 95;
const minPointsFemale = 85;
let canRetire = 'ainda não pode';

if (gender === 'M' && contribution >= minContributionMale) {
    if (age + contribution >= minPointsMale) {
        canRetire = 'pode';
    }
}
else {
    if (gender === 'F' && contribution >= minContributionFemale) {
        if (age + contribution >= minPointsFemale) {
            canRetire = 'pode';
        }
    }
}

console.log(`${name}, você ${canRetire} se aposentar !`);
