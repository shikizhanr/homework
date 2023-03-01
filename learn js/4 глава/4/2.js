let calculator = {
    sum() {
        return this.value1 + this.value2
    },

    mul() {
        return this.value1 * this.value2
    },
    
    read() {
        this.value1 = +prompt("Значение 1?", '');
        this.value2 = +prompt("Значение 2?", '');
    }
}