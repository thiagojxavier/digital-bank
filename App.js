const Account = require("./Account.js");
const Loan = require("./Loan.js");
const User = require("./User.js");

class App {
    static #listUsers = [];

    static createNewUser(fullName, email) {
        const doesEmailAlreadyExists = App.findUserForEmail(email);

        if(doesEmailAlreadyExists !== "Usuário não existe!") {
            console.log('Email do usuário já está sendo utilizado');
            return
        }

        const newUser = new User(fullName, email, new Account(20));

        this.#listUsers.push(newUser);

        return newUser
    }

    static findUserForEmail(email) {
        const user = this.#listUsers.find(user => user.email === email) ?? 'Usuário não existe!'
        return user;
    }

    static makeDepositInBank(email, value) {
        const findUser = this.findUserForEmail(email);
        findUser?.account.makeNewDeposit(value);
    }

    static makeLoansInBank(email, value, numInstallments) {
        const findUser = this.findUserForEmail(email);
        findUser?.account.makeNewLoan(value, numInstallments);
    }

    static makeTransferInBank(transferor, favored, value) {
       transferor?.account.makeNewTransfer(transferor, favored, value);
    }

    static changeInterestRate(rate) {
        Loan.setNewRate = rate;
    }
}