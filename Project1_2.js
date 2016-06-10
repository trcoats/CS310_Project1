function buttonPressed(){
    var name = document.getElementById("name");
    var quizScore = document.getElementById("q");
    var assignmentScore = document.getElementById("a");
    var midtermScore = document.getElementById("m");
    var finalScore = document.getElementById("f");

    function getFinalScore() {
        return (quizScore.value * .15) + (assignmentScore.value * .4) + (midtermScore.value * .2) + (finalScore.value * .25);
    }

    function getLetterGrade() {
        var finalGrade = getFinalScore();
        var letterGrade;
        if (finalGrade <= 60) {
            letterGrade = "F";
        }
        else if (finalGrade > 60 && finalGrade <= 70) {
            letterGrade = "D";
        }
        else if (finalGrade > 70 && finalGrade <= 80) {
            letterGrade = "C";
        }
        else if (finalGrade > 80 && finalGrade <= 90) {
            letterGrade = "B";
        }
        else if(finalGrade > 90 && finalGrade <= 100){
            letterGrade = "A";
        }
        else{
            letterGrade = "Invalid or A+++!";
        }
        return letterGrade;
    }


    var finalPercent = String(getFinalScore());
    alert(name.value + " got a(n) " + getLetterGrade() + " with a percentage of: " + finalPercent + "%.");
}
