class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        if (interest < 0) {
            throw new RangeError("Interest has to be equal or greater than zero");
        }
        this._interest = interest;
    }

    addInterest() {
        const newInterest = this._balance * (this._interest / 100);
        if (newInterest > 0) {
            super.deposit(newInterest);
        }
        return newInterest;
    }

    toString() {
        return "SavingsAccount " + this._number + ": balance " + this._balance;
    }

    endOfMonth() {
        const newInterest = this.addInterest();
        return 'Interest added ' + this.toString() + ' interest: ' + newInterest;
    }
}
