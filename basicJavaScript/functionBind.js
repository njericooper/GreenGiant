function a(){
  this.hello== 'world';

};

var b = a.bind({hello: 'world'});
b();
