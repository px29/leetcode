function convertSystemTime (timestamp) {
    const date = new Date(timestamp);
    return date;
}

function call () {
    console.log(convertSystemTime(1453094034000));
}

module.exports = call;