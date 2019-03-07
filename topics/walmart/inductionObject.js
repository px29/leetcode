function induction (arr) {
    const result = [];
    const map = {};
    for (const a of arr) {
        if (!map.hasOwnProperty(a.skill)) {
            map[a.skill] = [a.user];
        } else {
            map[a.skill].push(a.user);
        }
    }

    for (const p in map) {
        result.push({skill: p, users: map[p], count: map[p].length});
    }
    return result.sort((a, b) => b.count - a.count);
}

module.exports = induction;

/* 
endorsements = [
  {skill: 'javascript', user: 'user1'}, 
  {skill: 'css', user: 'user2'}, 
  {skill: 'html', user: 'user3'}, 
  {skill: 'javascript', user: 'user2'}, 
  {skill: 'css', user: 'user3'}, 
  {skill: 'javascript', user: 'user3'}
]

[
  {skill: 'javascript', users:['user1', 'user2', 'user3'], count: 3}, 
  {skill: 'css', users:['user2', 'user3'], count: 2}, 
  {skill: 'html', users: ['user3'], count: 1}
]
*/