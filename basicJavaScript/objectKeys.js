var a = { a: 'b', c: 'd'};
for (var i in a) { }
Object.prototype.c = 'd';
// property check

for (var i in a){
  if (a.hasOwnProperty(i)){ }
}

// to get around this complicated jazz

var a = {a: 'b', c: 'd'};
Object.keys(a); //['a', 'c']
