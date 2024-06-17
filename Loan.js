const Installment = require("./Installment.js");
const Value = require("./Value.js");

module.exports = class Loan extends Value{
    static #interestRate = 0.01;

    constructor(value, numInstallments) {
        super(value);
        this.numInstallmentsTotal = numInstallments;
        this.paidInstallments = [];
        this.installmentsValue = (value / numInstallments) + (value * Loan.#interestRate);
    }

    static get readInterestRate() {
        return this.#interestRate;
    }

    static set setNewRate(rate) {
        this.#interestRate = (rate * 100) / 10000 ;
    }

    paidInstallment(valueInstallment, numInstallment, stateInstallment) {
        if(this.paidInstallments.length === 9) {
            return
        }
        this.paidInstallments.push(new Installment(valueInstallment, numInstallment, stateInstallment));
        this.numPaid++;
    }
}