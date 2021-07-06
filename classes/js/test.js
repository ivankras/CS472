/**
 * Account tests
 */
describe('Account', () => {
    describe('getNumber', () => {
    
        it('returns 12 for account with number 12', () => {
            const acc = new Account(12);
            assert.strictEqual(12, acc.getNumber()); 
        });
    
        it('returns 0 for account with number 0', () => {
            const account = new Account(0);
            assert.strictEqual(0, account.getNumber()); 
        });
    
    });
    
    describe('getBalance', () => {

        it('returns 0 for a new account', () => {
            const acc = new Account(1);
            assert.strictEqual(0, acc.getBalance()); 
        });
    
        it('returns 10 for a new account and a deposit of 10', () => {
            const acc = new Account(1);
            acc.deposit(10);
            assert.strictEqual(10, acc.getBalance()); 
        });
    
        it('returns 5.5 for a new account, a deposit of 10 and a withdraw of 4.5', () => {
            const acc = new Account(1);
            acc.deposit(10);
            acc.withdraw(4.5);
            assert.strictEqual(5.5, acc.getBalance()); 
        });
    
    });
    
    describe('deposit', () => {
        
        it('increases account balance from 0 (new account) to 4 when adding 4', () => {
            const acc = new Account(3);
            acc.deposit(4);
            assert.strictEqual(4, acc.getBalance()); 
        });

        it('throws RangeError if indicated amount == 0', () => {
            const acc = new Account(3);
            assert.throws(() => {acc.deposit(0)}, RangeError, "Deposit amount has to be greater than zero");
        });

        it('throws RangeError if indicated amount < 0', () => {
            const acc = new Account(3);
            assert.throws(() => {acc.deposit(-1)}, RangeError, "Deposit amount has to be greater than zero");
        });

    });
    
    describe('withdraw', () => {
        
        it('decreases account balance to 5 if it had 8 and 3 are withdrawn', () => {
            const acc = new Account(5);
            acc.deposit(8);
            acc.withdraw(3);
            assert.strictEqual(5, acc.getBalance());
        });

        it('throws RangeError if indicated amount == 0', () => {
            const acc = new Account(3);
            assert.throws(() => {acc.withdraw(0)}, RangeError, "Withdraw amount has to be greater than zero");
        });

        it('throws RangeError if indicated amount < 0', () => {
            const acc = new Account(3);
            assert.throws(() => {acc.withdraw(-1)}, RangeError, "Withdraw amount has to be greater than zero");
        });

        it('throws Error when withdrawing 10 to a balance of 7', () => {
            const acc = new Account(3);
            acc.deposit(7);
            assert.throws(() => {acc.withdraw(10)}, Error, "Insufficient funds");
        });

    });
    
    describe('endOfMonth', () => {
        it('returns empty string', () => {
            const acc = new Account(1000);
            assert.strictEqual('', acc.endOfMonth());
        });
    });

});

/**
 * SavingsAccount tests
 */
describe('SavingsAccount', () => {
    
    describe('getInterest', () => {
        
        it('returns 0.05 for a new SavingsAccount with 0.05 interest', () => {
            const acc = new SavingsAccount(1, 0.05);
            assert.strictEqual(0.05, acc.getInterest());
        });

        it('returns 0.02 for a new SavingsAccount with 0.02 interest', () => {
            const acc = new SavingsAccount(1, 0.02);
            assert.strictEqual(0.02, acc.getInterest());
        });

    });

    describe('setInterest', () => {
        
        it('sets to 5 the interest of a SavingsAccount for parameter 5', () => {
            const acc = new SavingsAccount(1, 1);
            acc.setInterest(5);
            assert.strictEqual(5, acc.getInterest());
        });

        it('sets to 0 the interest of a SavingsAccount for parameter 0', () => {
            const acc = new SavingsAccount(1, 2);
            acc.setInterest(0);
            assert.strictEqual(0, acc.getInterest());
        });

        it('throws RangeError if indicated interest < 0', () => {
            const acc = new SavingsAccount(1, 0.02);
            assert.throws(() => {acc.setInterest(-1)}, RangeError, "Interest has to be equal or greater than zero");
        });

    });
    
    describe('addInterest', () => {

        it('new balance of SAcc with balance 100 and interest 5 is 105', () => {
            const acc = new SavingsAccount(1, 5);
            acc.deposit(100);
            assert.strictEqual(5, acc.addInterest());
            assert.strictEqual(105, acc.getBalance());
        });

        it('new balance of SAcc with balance 64 and interest 50 is 96', () => {
            const acc = new SavingsAccount(1, 50);
            acc.deposit(64);
            assert.strictEqual(32, acc.addInterest());
            assert.strictEqual(96, acc.getBalance());
        });

    });
    
    describe('endOfMonth', () => {
        
        it('returns description of SAcc with balance 100 and interest 2,\
            including new balance of 102 and added interest of 2', () => {
                const acc = new SavingsAccount(23, 2);
                acc.deposit(100);
                assert.strictEqual(
                    'Interest added SavingsAccount 23: balance 102 interest: 2',
                    acc.endOfMonth()
                );
        });

        it('returns description of SAcc with balance 150 and interest 1,\
            including new balance of 151.5 and added interest of 1.5', () => {
                const acc = new SavingsAccount(23, 1);
                acc.deposit(150);
                assert.strictEqual(
                    'Interest added SavingsAccount 23: balance 151.5 interest: 1.5',
                    acc.endOfMonth()
                );
        });

    });

});

/**
 * CheckingAccount tests
 */
describe('CheckingAccount', () => {

    describe('getOverdraftLimit', () => {

        it('returns 500 for a new CheckingAccount with 500 interest', () => {
            const acc = new CheckingAccount(1, 500);
            assert.strictEqual(500, acc.getOverdraftLimit());
        });

        it('returns 200 for a new CheckingAccount with 200 interest', () => {
            const acc = new CheckingAccount(1, 200);
            assert.strictEqual(200, acc.getOverdraftLimit());
        });

    });
    
    describe('setOverdraftLimit', () => {

        it('sets to 5 the overdraft limit of a CheckingAccount for parameter 5', () => {
            const acc = new CheckingAccount(1, 1);
            acc.setOverdraftLimit(5);
            assert.strictEqual(5, acc.getOverdraftLimit());
        });

        it('sets to 0 the overdraft limit of a CheckingAccount for parameter 0', () => {
            const acc = new CheckingAccount(1, 2);
            acc.setOverdraftLimit(0);
            assert.strictEqual(0, acc.getOverdraftLimit());
        });

        it('throws RangeError if indicated overdraft limit < 0', () => {
            const acc = new CheckingAccount(1, 0.02);
            assert.throws(() => {acc.setOverdraftLimit(-1)}, RangeError, "Overdraft limit has to be equal or greater than zero");
        });

    });
    
    describe('withdraw', () => {

        it('decreases account balance to 5 if it had 8 and 3 are withdrawn', () => {
            const acc = new CheckingAccount(5, 100);
            acc.deposit(8);
            acc.withdraw(3);
            assert.strictEqual(5, acc.getBalance());
        });

        it('decreases account balance to -92 if it had 8 and 100 are withdrawn (overdraft limit = 100)', () => {
            const acc = new CheckingAccount(5, 100);
            acc.deposit(8);
            acc.withdraw(100);
            assert.strictEqual(-92, acc.getBalance());
        });

        it('throws RangeError if indicated amount == 0', () => {
            const acc = new CheckingAccount(3, 100);
            assert.throws(() => {acc.withdraw(0)}, RangeError, "Withdraw amount has to be greater than zero");
        });

        it('throws RangeError if indicated amount < 0', () => {
            const acc = new CheckingAccount(3, 100);
            assert.throws(() => {acc.withdraw(-1)}, RangeError, "Withdraw amount has to be greater than zero");
        });

        it('throws Error when withdrawing 108 to a balance of 7 with overdraft of 100', () => {
            const acc = new CheckingAccount(3, 100);
            acc.deposit(7);
            assert.throws(() => {acc.withdraw(108)}, Error, "Insufficient funds");
        });

    });
   
    describe('endOfMonth', () => {

        it('returns description of CAcc with balance 100 and overdraftLimit 100', () => {
                const acc = new CheckingAccount(23, 100);
                acc.deposit(100);
                assert.strictEqual(
                    'CheckingAccount 23: balance 100 overdraft-limit 100',
                    acc.endOfMonth()
                );
        });

        it('returns description of CAcc with balance -15 and overdraftLimit 50,\
            including warning for negative balance', () => {
                const acc = new CheckingAccount(23, 50);
                acc.withdraw(15);
                assert.strictEqual(
                    'Warning, low balance CheckingAccount 23: balance -15 overdraft-limit 50',
                    acc.endOfMonth()
                );
        });

    });

});

/**
 * Bank tests
 * NOTE: all these tests share a bank because of the static #nextNumber attribute (requested on the assignment); I believe it should not be static.
 */
describe('Bank', () => {
    
    describe('addAccount', () => {
        
        it('after adding an Account, the bank has one account with index 0', () => {
            let bank = new Bank();
            bank.addAccount();
            assert.strictEqual((new Account(0)).toString(), bank.accountReport());
        });

    });
    
    describe('addSavingsAccount', () => {
        
        it('after adding a SavingsAccount, the bank has one savings account', () => {
            let bank = new Bank();
            bank.addSavingsAccount(1);
            assert.strictEqual((new SavingsAccount(1, 1)).toString(), bank.accountReport().split('\n')[0]);
        });

    });
    
    describe('addCheckingAccount', () => {

        it('after adding an CheckingAccount, the bank has one checking account', () => {
            let bank = new Bank();
            bank.addCheckingAccount(100);
            assert.strictEqual((new CheckingAccount(2, 100)).toString(), bank.accountReport().split('\n')[0]);
        });

    });
    
    describe('closeAccount', () => {

        it('after creating an account (id 3) and closing it, it is no longer in the bank', () => {
            let bank = new Bank();
            bank.addAccount();
            bank.closeAccount(3);
            assert.strictEqual(undefined, bank.accountReport().split('\n')[3]);
        });

    });
    
    describe('accountReport', () => {

        it('created accounts\' toString() methods add up into an accountReport', () => {
            let bank = new Bank();
            bank.addAccount();
            bank.addSavingsAccount(1);
            bank.addCheckingAccount(100);
            const compareToStr = [
                (new Account(4)).toString(),
                (new SavingsAccount(5, 1)).toString(),
                (new CheckingAccount(6, 100)).toString()
            ].join('\n');
            assert.strictEqual(compareToStr, bank.accountReport());
        })

    });
    
    describe('endOfMonth', () => {

        it('created accounts\' endOfMonth() methods add up into an endOfMonth report', () => {
            let bank = new Bank();
            bank.addAccount();
            bank.addSavingsAccount(1);
            bank.addCheckingAccount(100);
            const compareToStr = [
                (new Account(7)).endOfMonth(),
                (new SavingsAccount(8, 1)).endOfMonth(),
                (new CheckingAccount(9, 100)).endOfMonth()
            ].join('\n');
            assert.strictEqual(compareToStr, bank.endOfMonth());
        })

    });

});
