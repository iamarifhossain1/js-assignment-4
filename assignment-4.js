/** 
 * Problem-01 : Train TT's Fine Calculator
 */

function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return 'Invalid'
    }
    const surCharge = fare * 0.2;
    const serviceCharge = 30;
    const total = fare + surCharge + serviceCharge;
    return total;
}


/** 
 * Problem-02 : Clean & Capitalize Characters
 */

function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return 'invalid';
    }
    let result = '';
    for (const char of str) {
        if (char !== ' ') {
            result = result + char;
        }
    }
    return result.toUpperCase();
}

const output = onlyCharacter();
console.log(output);



/** 
 * Problem-03 : FIFA Best Team Award
 */


function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        return 'Invalid'
    }

    const team1 = player1.foul + player1.cardY + player1.cardR;
    const team2 = player2.foul + player2.cardY + player2.cardR;

    if (team1 < team2) {
        return player1.name;
    }
    
    else if (team2 < team1) {
        return player2.name;
    }

    else {
        return 'Tie'
    }
}
/** 
 * Problem-04: Same Same But Different 
 */

function isSame(arr1 , arr2 ) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return 'Invalid'
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}


/**
 * Problem-05: Exam Result Report Generator
 */

function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return 'Invalid'
    }

    if (marks.length === 0) {
        return {finalScore: 0, pass: 0, fail: 0};
    }

    let total = 0;
    let passCount = 0;
    let failCount = 0;
    
    for (let mark of marks) {
        total = total + mark;
        if (mark >= 40) {
            passCount++
        }

        else { 
            failCount++;
        }
    }

    const avg = Math.round(total / marks.length);

    return { 
        finalScore: avg,
        pass: passCount,
        fail: failCount
    };
}
