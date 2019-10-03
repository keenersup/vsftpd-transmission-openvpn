const {krDrama, crawler} = require('./index')

const 천리마마트 = [krDrama("천리마 마트"), '/data/media/드라마/쌉니다\ 천리마마트']
crawler(...천리마마트, 3)
