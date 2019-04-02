var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    console.log(envelopes);
    const dp = new Array(encelopes.length);



};

function call (){
    console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]));
}

module.exports = call;