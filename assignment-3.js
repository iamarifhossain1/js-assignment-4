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

function  onlyCharacter(str) {
    if (typeof str !== 'string') {
        return 'invalid';
    }
    let result = '';
    for (const char of str) {
        if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
            result = result + char;
        }
    }
    return result.toUpperCase();
}


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

