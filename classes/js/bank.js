class Bank {
    static #nextNumber = 0;

    static getNextNumber() {
        return Bank.#nextNumber++;
    }

    constructor() {
        this._accounts = [];
    }

    addAccount() {
        const nextNumber = Bank.getNextNumber(); 
        const newAccount = new Account(nextNumber);
        this._accounts[nextNumber] = newAccount;
        return nextNumber;
    }

    addSavingsAccount(interest) {
        const nextNumber = Bank.getNextNumber(); 
        const newAccount = new SavingsAccount(nextNumber, interest);
        this._accounts[nextNumber] = newAccount;
        return nextNumber;
    }

    addCheckingAccount(overdraft) {
        const nextNumber = Bank.getNextNumber(); 
        const newAccount = new CheckingAccount(nextNumber, overdraft);
        this._accounts[nextNumber] = newAccount;
        return nextNumber;
    }

    closeAccount(number) {
        this._accounts[number] = null;
    }

    accountReport() {
        return this._accounts.filter(e => e !== null).map(e => e.toString()).join('\n');
    }

    endOfMonth() {
        return this._accounts.filter(e => e !== null).map(e => e.endOfMonth()).join('\n');
    }
}