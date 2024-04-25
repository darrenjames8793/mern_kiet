const b =  new Buffer.from('abcdefgh');

console.log(b.toString());

b.write('Other');

console.log(b.toString());