function People (name) {
    this.name = name;
}

People.prototype.getName = function () {
    return this.name;
}

function call () {
    const p = new People(2);
    console.log(p.getName());
}

module.exports = call;