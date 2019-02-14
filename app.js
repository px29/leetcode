const f = require('./topics/zillow/MineSwiper');

const result = f.generateBoard(4, 2);
console.log(result);
for (let i = 0; i < 10; i++) {
    const r = f.handleClick(
        parseInt(Math.random() * 10),
        parseInt(Math.random() * 10),
        result
    );
    console.log(r);
}
