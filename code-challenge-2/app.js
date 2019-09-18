const johnsTeamScore = [89, 120, 103];
const mikesTeamScore = [116, 94, 123];
const marysTeamScore = [97, 134, 105];

let highesTotalScore

const totalTeamScorelists = [
    johnsTeamScore,
    mikesTeamScore,
    marysTeamScore
]

totalTeamScorelists.forEach(teamScoreList => {
    let teamAvarageScoreList = []
    teamAvarageScoreList.push(calcScoreAvarage(teamScoreList));

    highesTotalScore = calcScoreAvarage(teamAvarageScoreList)
});

console.log(highesTotalScore);


function calcScoreAvarage(array){
    let totalScore = 0;
    array.forEach(number => {
        totalScore += number;
    });
    const avarageScore = totalScore/array.length;
    return avarageScore;
};

