function computerPlay() {
    let ranNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (ranNum == 0) {
        return "rock";
    } else if (ranNum == 1) {
        return "paper";
    } else if (ranNum == 2) {
        return "scissors";
    }
}