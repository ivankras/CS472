class CheckingAccount extends Account {
    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit) {
        if (overdraftLimit < 0) {
            throw new RangeError("Overdraft limit has to be equal or greater than zero");
        }
        this._overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if ((this._balance - amount) < (-1 * this._overdraftLimit)) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance + " overdraft-limit " + this._overdraftLimit;
    }

    endOfMonth() {
        const warning = this.getBalance() < 0 ? 'Warning, low balance ' : '';
        return warning + this.toString();
    }
}
