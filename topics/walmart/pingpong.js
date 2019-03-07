function pingpong() {
    let ping = true;
    setInterval(() => {
        if (ping) {
            console.log('ping');
        } else {
            console.log('pong');
        }
        ping = !ping;
    }, 1000);
}

function call () {
    pingpong();
}

module.exports = call;