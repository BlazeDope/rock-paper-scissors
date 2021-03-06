const computerPlay = () => {
            let myArray = ['Rock', 'Paper', 'Scissors'];
            const randomElement = Math.floor(Math.random() * myArray.length);
            return myArray[randomElement];
        }

        

        function playRound(playerSelection, computerSelection) {
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerPlay().toLowerCase();
            if (playerSelection == computerSelection) {
                return 'Tie game!';
            } else if (
                (computerSelection == 'rock' && playerSelection == 'scissors') ||
                (computerSelection == 'scissors' && playerSelection == 'paper') ||
                (computerSelection == 'paper' && playerSelection == 'rock')
            ) {
                return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`
            } else {
                return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`
            }
        }

        function capitalize(str) {
            return str.charAt(0).toUppercase() + str.slice(1);
        }

        let playerSelection = 'rock';
        let computerSelection;
        console.log(playRound(playerSelection, computerSelection))