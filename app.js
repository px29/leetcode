const WordSearch = require('./topics/array/WordSearch79')

const result = WordSearch.exist(
    [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
    'ABCCED'
)
console.log(result)
