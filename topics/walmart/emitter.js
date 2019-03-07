class Emitter {
    constructor () {
        this.events = {};
    }
    getter () {
        return this.events;
    }

    on(event, fn) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(fn);
    }

    emit(event, fn) {
        if (this.events.hasOwnProperty(event)) {
            if (typeof fn === 'function') {
                const index = this.events[event].indexOf(fn);
                if (index >= 0) {
                    this.events[event][index]();
                } 
            } else {
                this.events[event].forEach((f) => f());
                
            }
        }
    }

    off(event, fn) {
        if (this.events.hasOwnProperty(event)) {
            if (typeof fn === 'function') {
                this.events[event].splice(this.events[event].indexOf(fn), 1);
            } else {
                this.events[event] = [];
            }
        }
    }
}

module.exports = Emitter;