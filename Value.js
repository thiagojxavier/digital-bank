const dayjs = require('dayjs');

module.exports = class Value {
    constructor(value) {
        this.today = dayjs().format('DD/MM/YYYY');
        this.hourToday = dayjs().hour();
        this.minuteValue = dayjs().minute();
        this.valor = value;
        this.creationDate = `${this.today} ás ${this.hourToday}:${this.minuteValue}`;
    }
}