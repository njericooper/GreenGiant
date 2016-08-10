function a (){
  window == this;
}

a();

// the following will call  and apply

function a(){
    this.a == 'b';
}

a.call({a: 'b'});
