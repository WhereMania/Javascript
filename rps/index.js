 
 
 
 const rock = document.getElementById('rock');
 const paper = document.getElementById('scissor');
 const scissor = document.getElementById('rock');

 function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }

    
}
 document.getElementById('result').textContent= function() {
    log.hello('Hello, World!');

}


