const mark = {
    weight: 90,
    height: 200
};

const john = {
    weight: 90,
    height: 188
};

const result = compareBmi(mark, john);
console.log(result);

function calcBMI(person){
    const weight = person.weight;
    const height = person.height;
    const heightPow2 = height * 2
    return weight / heightPow2 * 100
};

function compareBmi(personOne, personeTwo){
    const mark = calcBMI(personOne);
    const john = calcBMI(personeTwo);

    return `marks bmi is ${mark} & Johns bmi is ${john}`
};