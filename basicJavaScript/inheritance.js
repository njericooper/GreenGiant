function Ferret (){};

Ferret.prototype = new Animal();

Ferret.prototype.type = 'domestic';

// overriding

Ferret.prototype.eat = function (food){
  Animal.prototype.eat.call (this, food);
  // ferret junk here I'm going to leave this blank for times sake

}
