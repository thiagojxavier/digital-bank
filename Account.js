const Deposit = require("./Deposit.js");
const Loan = require("./Loan.js");
const Transfer = require("./Transfer.js");

module.exports = class Account {
    #balance;

    constructor(balance) {
        this.#balance = balance;
        this.allDepositsMade = [];
        this.allLoansMade = [];
        this.allTransfersMade = [];
    }

    get getBalance() {
        return this.#balance;
    }

    set incrementBalance(value) {
        this.#balance += value;
    }

    set decrementBalance(value) {
        this.#balance -= value;
    }

    makeNewDeposit(value) {
        const deposit = new Deposit(value);
        this.#balance += deposit.valor;
        this.allDepositsMade.push(deposit);
    }

    makeNewLoan(value, numInstallments) {
        const loan = new Loan(value, numInstallments);
        this.#balance += value;
        this.allLoansMade.push(loan);
    }

    makeNewTransfer(transferor, favored, value) {
        const transfer = new Transfer(transferor, favored, value);
        this.allTransfersMade.push(transfer);
        favored?.account.allTransfersMade.push(transfer);
        transferor.account.decrementBalance = value;
        favored.account.incrementBalance = value;
        console.log(transfer.getData);
    }
}