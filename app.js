const f = require('./topics/js/html2Json');
const x = {
    tag: 'div',
    props: {
        name: '123',
    },
    children: [{ tag: 'p' }, { tag: 'a' }],
};

const html = `<div>
    <p>
        xxx
    </p>
    <a>
        aaa
    </a>
</div>`;

const result = f.htmlToJson(html);
console.log(result);
