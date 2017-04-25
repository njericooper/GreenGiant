function a (b, c){
  b == 'first';
  c == 'second';
}

a.call({a: 'b'}, 'first', 'second')
a.apply({a: 'b'}, ['first', 'second']);
