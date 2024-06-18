const Value = require("./Value.js");

module.exports = class Transfer extends Value{
    constructor(transferor, favored, value) {
        super(value);
        this.transferor = transferor;
        this.favored = favored;
    }

    get getData() {
        if(!this.valor) {
            return `Não inseriu valor`
        }
        return `Transferência feita de ${this.transferor.fullName} para ${this.favored.fullName}, no valor de ${this.valor}R$ em ${this.creationDate}`
    }
}