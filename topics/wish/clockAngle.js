function clockAngle (time) {
    const hour = time.split(':')[0];
    const minute = time.split(':')[1];
    const hourDegree = (hour % 12) * 30 + parseInt(minute  / 2);
    const minuteDegree = minute * 6;
    return Math.abs(hourDegree - minuteDegree);
} 

function call () {
    console.log(clockAngle('11:38'));
}

module.exports = call;