const name = 'Lisandro';
const gender = 'M';
const age = 49;
const contribution = 31;

const minContributionMale = 35;
const minContributionFemale = 30;
const minPointsMale = 95;
const minPointsFemale = 85;
const numberPoints = age + contribution;

const retireMale = gender === 'M' && contribution >= minContributionMale && numberPoints >= minPointsMale;
const retireFemale = gender === 'F' && contribution >= minContributionFemale && numberPoints >= minPointsFemale;

let canRetire = "still can't";

if (retireMale) {
        canRetire = 'can';
}
else {
    if (retireFemale) {
            canRetire = 'can';
    }
}

console.log(`${name}, you ${canRetire} retire !`);
