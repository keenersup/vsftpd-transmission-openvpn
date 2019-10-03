const {krEnt, crawler} = require('./index')

const 코미디빅리그 = [krEnt("코미디 빅리그"), '/data/media/예능/코미디\ 빅리그\ \(2019\)']
crawler(...코미디빅리그, 3)
