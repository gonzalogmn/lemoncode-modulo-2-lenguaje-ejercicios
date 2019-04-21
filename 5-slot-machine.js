class SlothMachine {

    constructor() {
        this._counter = 0;
    }

    play() {
        this._counter++;

        const ruletas = [Math.random() >= 0.5, Math.random() >= 0.5, Math.random() >= 0.5];

        console.log(`La ruleta tiene de resultado ${JSON.stringify(ruletas)}`);

        const isWinning = ruletas.filter(ruleta => ruleta == false).length <= 0;

        let message = "Good luck next time!!";
        
        if(isWinning) {
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