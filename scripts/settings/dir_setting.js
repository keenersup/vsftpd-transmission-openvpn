const path = require('path');

const mediaDir = '../data/media/';

const tvDir = path.join(mediaDir, '예능');
const dramaDir = path.join(mediaDir, '드라마')
const jsMusicDir = path.join(mediaDir, '음악/JS')
const unclassifiedDir = path.join(mediaDir, '미분류')

const dirMap = {
[path.join(tvDir, '코미디 빅리그 (2019)')] : /코미디.*빅리그|코빅/,
[path.join(dramaDir, '쌉니다 천리마마트')] : /쌉니다.*천리마마트/,
[path.join(jsMusicDir)] : /멜론|멜론.*\(Melon\)/,

}

module.exports ={
	dirMap,
}

