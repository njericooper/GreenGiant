function Animal (name) {
  this.name = name;
}

Animal.prototype.getName () {
  return this.name;
};

var animal  = new Animal  ('tobi');
a.getName() == 'tobi'; // true
