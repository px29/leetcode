function Promise () {
    this.arr = [];
    this.resolve = function (data) {
        for (const f of this.arr) {
            f(data);
        }
        this.data = data;
    }
    this.done = function (callback) {
        this.arr.push(callback);
        if (this.data) {
            callback(this.data);
        }
        return this;
    }
}

function getTweets () {
    const promise = new Promise();
    setTimeout(() => {
        promise.resolve('fakedata');
    }, 3000);
    return promise;
}

function call() {
    const tweets = getTweets();
    tweets.done(function(data) {
        console.log("first: " + data);
    }).done(function(data) {
        console.log('second: ' + data);
    });

    tweets.resolve('aaa');
    tweets.done(function(data){
        console.log('thrid', data);
    })
}

module.exports = call;