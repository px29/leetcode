function Interval(start, end) {
    this.start = start;
    this.end = end;
}


function meeting(intervals, time) {
    if (!intervals || intervals.length === 0) {
        return [];
    }
    let r = 0;
    for (const i of intervals) {
        if (i.start <= time && i.end >= time) {
            r++;
        }
    }
    return r;

}

function call() {
    const intervals = new Array();
    
    intervals.push(new Interval(0, 2));
    intervals.push(new Interval(1, 5));
    intervals.push(new Interval(5, 10));
    intervals.push(new Interval(13, 23));
    intervals.push(new Interval(24, 25));
    intervals.push(new Interval(1, 5));
    intervals.push(new Interval(8, 12));
    intervals.push(new Interval(15, 24));
    intervals.push(new Interval(25, 26));
    intervals.sort((a, b) => a.start - b.start);
    console.log(intervals);
    console.log(meeting(intervals, 5));
}

module.exports = call;