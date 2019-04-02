var ExamRoom = function(N) {
    this.seats = [];
    this.n= N;
    
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
    // 每次我们需要往里插值/
    // 怎么插值呢，就是找到当前的最大间距，然后插在中间。
    // 找到最大间距是要遍历整个数组的，间距就是[i + 1] - [i]
    // seats 的两个端点是可能被删掉的。
    if (this.seats.length === 0) {
        this.seats.push(0);
        return 0;
    }
    let d = Math.max(this.seats[0], this.n - 1 - this.seats[this.seats.length - 1]); // 两个端点[0, N]距离最近的seat 的距离。因为这两个端点可能被leave
    // 如果此时d 是0， 那么说名两个端点都是满的
    console.log(d);
    for (let i = 0; i < this.seats.length - 1; i++) {
        d = Math.max(d, parseInt((this.seats[i + 1] - this.seats[i]) / 2));// 区间内那两个点间距最大，返回间距
    }
    if (this.seats[0] === d) { // 也就是0 被leave 了
        this.seats.unshift(0);
        return 0;
    }
    for (let i = 0; i < this.seats.length - 1; i++) {
        if (parseInt((this.seats[i + 1] - this.seats[i]) / 2) === d) {
            this.seats.splice(i + 1, 0, parseInt((this.seats[i + 1] + this.seats[i]) / 2));
            return this.seats[i + 1];
        }
    }
    // 除此之外
    // 就剩下右端点了
    this.seats.push(this.n - 1);
    return this.n - 1;
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    if (this.seats.includes(p)) {
        const index = this.seats.indexOf(p);
        this.seats.splice(index, 1);
    }
};


function call () {
    const examRoom = new ExamRoom(10);
    examRoom.seat();
    examRoom.seat();
    examRoom.seat();
    examRoom.seat();
    examRoom.seat();
    examRoom.seat();
    examRoom.seat();
    examRoom.seat();
}

module.exports = call;