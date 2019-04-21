class SlothMachine {

    constructor() {
        this._counter = 0;
    }

    play() {
        this._counter++;

        const roulettes = [Math.random() >= 0.5, Math.random() >= 0.5, Math.random() >= 0.5];
        console.log(`- Roulette results: ${JSON.stringify(roulettes)}`);

        const isAWin = roulettes.filter(roulette => roulette == false).length <= 0;

        let message = "Good luck next time!!";

        if(isAWin) {
            message = `Congratulations!!!. You won ${this._counter} coins!!`;
            this._counter = 0;
        }
        return message;
    }

}

const machine1 = new SlothMachine();
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());