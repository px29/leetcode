var LRUCache = function(capacity) {
    this.cache = new Map(); // <key, [value, frequence]>
    this.capacity = capacity;
    this.frequence = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        let index = this.frequence.indexOf(key);
        this.frequence.splice(index, 1);
        this.frequence.push(key);
        return this.cache.get(key);
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.size === this.capacity || this.cache.has(key)) {
        const key = this.frequence.shift();
        this.cache.delete(key);
    } 
    this.cache.set(key, value);
    this.frequence.push(key);
};

function call() {
    const lru = new LRUCache(2);
    lru.get(2);
    lru.put(2,6);
    lru.get(1);
    lru.put(1,5);
    lru.put(1,2);
    lru.get(1);
    lru.get(2);
}

module.exports = call;